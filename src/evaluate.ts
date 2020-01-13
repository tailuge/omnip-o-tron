import { Puzzle } from "./puzzle"
import { Position } from "./position"
import { StockfishQueue } from "./stockfishqueue"

export class Evaluate {
  private readonly stockfishQueue

  constructor(stockfishQueue: StockfishQueue) {
    this.stockfishQueue = stockfishQueue
  }

  public analyse(
    puzzle: Puzzle,
    priorAnalysisComplete,
    posteriorAnalysisComplete
  ) {
    this.stockfishQueue.enqueue(
      new Position(puzzle.analysis.fen),
      priorAnalysisComplete
    )
    this.stockfishQueue.enqueue(
      new Position(puzzle.chess.fen()),
      posteriorAnalysisComplete
    )
  }
}
