import "mocha"
import { expect } from "chai"
import { successorStates } from "../src/util"
import { Chess } from "chess.js"

describe("Utils", () => {
  it("next states", done => {
    const chess = new Chess()
    const s = successorStates(chess)
    expect(s.length).to.equal(21)
    done()
  })
})
