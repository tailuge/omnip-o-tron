import { successorStates } from "../src/util"
import { Chess } from "chess.js"
import { Puzzle } from "./puzzle"
import { StockfishQueue } from "./stockfishqueue"
import { Evaluate } from "./evaluate"

export { Boards } from "./boards"
export { Puzzle } from "./puzzle"

export function puzzlesFrom(fen: String, sf) {
  const stockfishqueue = new StockfishQueue(
    sf,
    () => {} /*x => console.log(x)*/
  )
  const evaluate = new Evaluate(stockfishqueue)
  const chess = new Chess(fen)
  const s = successorStates(chess)
  const puzzles = s.map(x => new Puzzle(x, evaluate))
  return puzzles
}
