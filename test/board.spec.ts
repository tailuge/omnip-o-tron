import "mocha"
import { Boards } from "../src/boards"
import { JSDOM } from "jsdom"
import { Puzzle } from "../src/puzzle"
import { successorStates } from "../src/util"
import { Chess } from "chess.js"

describe("Boards", () => {
  it("Should render example data without exception", done => {
    const dom = new JSDOM(
      '<!doctype html><html><body><div id="chessground-examples"></div></body></html>'
    )
    let boards = new Boards(
      dom.window.document.getElementById("chessground-examples")
    )

    const chess = new Chess()
    const s = successorStates(chess)
    const puzzles = s.map(x => new Puzzle(x))
    /*
    var puzzles = [
      new Puzzle({
        fen:
          "rn1qkbnr/pp3pp1/2p1p2p/3p1b2/2PP1B2/4PN2/PP3PPP/RN1QKB1R w KQkq - 0 6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was a6." },
        move: {
          color: "b",
          from: "f6",
          to: "e4",
          flags: "n",
          piece: "n",
          san: "Ne4"
        }
      })
    ]
*/
    boards.setPuzzles(puzzles)
    done()
  })
})
