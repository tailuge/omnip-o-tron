import "mocha"
import { expect } from "chai"
import { StockfishQueue } from "../src/stockfishqueue"
import { Position } from "../src/position"

import * as sinon from "sinon"

function p(fen) {
  return new Position(fen)
}

const endgame = p("7k/8/8/8/8/8/R7/R6K w - -")

function nop(_) {}

describe("StockfishQueue", () => {
  var stockfishInterface
  var postMessage
  var addEventListener

  beforeEach(function() {
    stockfishInterface = {
      postMessage: nop,
      addEventListener: ({}, {}) => {}
    }
    postMessage = sinon.spy(stockfishInterface, "postMessage")
    addEventListener = sinon.spy(stockfishInterface, "addEventListener")
  })

  afterEach(function() {
    postMessage.resetHistory()
    addEventListener.resetHistory()
  })

  it("Initialise ok", done => {
    new StockfishQueue(stockfishInterface, nop, nop)
    let eventListener = addEventListener.firstCall.args[1]
    sinon.assert.calledOnce(postMessage)
    sinon.assert.calledOnce(addEventListener)
    eventListener("initialised")
    done()
  })

  it("Enqueue calls stockfish", done => {
    let stockfishQueue = new StockfishQueue(stockfishInterface, nop, nop)
    stockfishQueue.enqueue(endgame, nop)
    sinon.assert.calledOnce(addEventListener)
    sinon.assert.calledThrice(postMessage)
    done()
  })

  it("Enqueue does not start 2 calls stockfish at once", done => {
    let stockfishQueue = new StockfishQueue(stockfishInterface, nop, nop)
    stockfishQueue.enqueue(endgame, nop)
    stockfishQueue.enqueue(endgame, nop)
    sinon.assert.calledOnce(addEventListener)
    sinon.assert.calledThrice(postMessage)
    done()
  })

  it("Non scoring event handled without exception", done => {
    let stockfishQueue = new StockfishQueue(stockfishInterface, nop, nop)
    stockfishQueue.enqueue(endgame, nop)
    let eventListener = addEventListener.firstCall.args[1]
    eventListener({ data: "some string" })
    done()
  })

  it("Scoring event followed by bestmove handled", done => {
    let stockfishQueue = new StockfishQueue(stockfishInterface, nop, nop)
    let onComplete = sinon.spy(({}) => {})
    stockfishQueue.enqueue(endgame, onComplete)
    let eventListener = addEventListener.firstCall.args[1]
    eventListener({ data: "a score cp 4750 n" })
    eventListener({ data: "bestmove h8g7 ponder h1g2" })
    sinon.assert.calledOnce(onComplete)
    expect(onComplete.firstCall.args[0].score).to.equal(47.5)
    done()
  })

  it("Completion of first item triggers next", done => {
    let stockfishQueue = new StockfishQueue(stockfishInterface, nop, nop)
    let eventListener = addEventListener.firstCall.args[1]
    let onComplete1 = sinon.spy(({}) => {})
    let onComplete2 = sinon.spy(({}) => {})

    stockfishQueue.enqueue(p("7k/8/8/8/8/8/R7/R6K w - -"), onComplete1)
    stockfishQueue.enqueue(p("7k/8/8/8/8/8/R7/R6K b - -"), onComplete2)

    eventListener({ data: "a score cp 4750 n" })
    eventListener({ data: "bestmove h8g7 ponder h1g2" })

    sinon.assert.calledOnce(onComplete1)
    expect(onComplete1.firstCall.args[0].score).to.equal(47.5)
    expect(postMessage.callCount).to.equal(5)

    eventListener({ data: "a score mate -2 n" })
    eventListener({ data: "bestmove h8g7 ponder h1g2" })

    expect(onComplete2.firstCall.args[0].score).to.equal(-50)

    done()
  })
})
