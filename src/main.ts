import { successorStates } from "../src/util"
import { Chess } from "chess.js"
import { Puzzle } from "./puzzle"
import { StockfishQueue } from "./stockfishqueue"
import { Evaluate } from "./evaluate"

export { Boards } from "./boards"
export { Puzzle } from "./puzzle"
export { StockfishQueue } from "./stockfishqueue"
export { parse, build } from "search-params"

export function puzzlesFrom(fen: String, stockfishQueue: StockfishQueue) {
  const evaluate = new Evaluate(stockfishQueue)
  const chess = new Chess(fen)
  const s = successorStates(chess)
  const puzzles = s.map(x => new Puzzle(x, evaluate))
  return puzzles
}
