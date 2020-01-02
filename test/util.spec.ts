import "mocha"
import { expect } from "chai"
import { successorStates } from "../src/util"
import { Chess } from "chess.js"

describe("Utils", () => {
  it("next states", done => {
    const chess = new Chess()
    const s = successorStates(chess)
    console.log(s[0])
    expect(s.length).to.equal(20)
    done()
  })
})
