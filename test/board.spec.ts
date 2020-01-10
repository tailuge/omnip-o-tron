import "mocha"
import { Boards } from "../src/boards"
import { JSDOM } from "jsdom"
import { Puzzle } from "../src/puzzle"
import { successorStates } from "../src/util"
import { Chess } from "chess.js"
import { Evaluate } from "../src/evaluate"
import { StockfishQueue } from "../src/stockfishqueue"

function nop(_) {}

describe("Boards", () => {
  it("Should render example data without exception", done => {
    const dom = new JSDOM(
      '<!doctype html><html><body><div id="chessground-examples"></div></body></html>'
    )
    let boards = new Boards(
      dom.window.document.getElementById("chessground-examples")
    )

    var stockfishInterface = {
      postMessage: nop,
      addEventListener: ({}, {}) => {}
    }

    const chess = new Chess()
    const s = successorStates(chess)
    const stockfishqueue = new StockfishQueue(stockfishInterface, nop, 8)
    const puzzles = s.map(x => new Puzzle(x, new Evaluate(stockfishqueue)))
    boards.setPuzzles(puzzles)
    done()
  })
})
