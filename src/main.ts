import { successorStates } from "../src/util"
import { Chess } from "chess.js"
import { Puzzle } from "./puzzle"

export { Boards } from "./boards"
export { Puzzle } from "./puzzle"
export { colour, severity, phase, timecontrol } from "./filters"

export function puzzlesFrom(fen: String) {
  const chess = new Chess(fen)
  const s = successorStates(chess)
  const puzzles = s.map(x => new Puzzle(x))
  return puzzles
}
