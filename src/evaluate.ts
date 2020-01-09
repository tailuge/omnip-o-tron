import { Puzzle } from "./puzzle"
import { Position } from "./position"
import { StockfishQueue } from "./stockfishqueue"

export class Evaluate {
  private readonly stockfishQueue

  constructor(stockfishQueue: StockfishQueue) {
    this.stockfishQueue = stockfishQueue
  }

  public analyse(puzzle: Puzzle, beforeAnalysisComplete, afterAnalysisComplete) {
      console.log(afterAnalysisComplete)
      this.stockfishQueue.enqueue(new Position(puzzle.analysis.fen), beforeAnalysisComplete)
  }


}
