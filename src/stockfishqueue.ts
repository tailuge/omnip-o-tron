import { Event } from "./event"
import { Position } from "./position"

class WorkItem {
  public readonly position: Position
  public readonly onComplete

  constructor(position, onComplete) {
    this.position = position
    this.onComplete = onComplete
  }
}

export class StockfishQueue {
  private readonly stockfish
  private readonly log
  private readonly workItems: WorkItem[] = []
  private readonly allComplete
  public depth: number

  constructor(stockfish, allComplete, log) {
    this.stockfish = stockfish
    this.allComplete = allComplete
    this.log = log
    this.depth = 8
    this.send("setoption name MultiPV value 1")
    this.stockfish.addEventListener("message", event => {
      this.sfEventHandler(event.data)
    })
  }

  private sfEventHandler(event) {
    const e = new Event(event)
    if (this.workItems.length == 0) {
      return
    }

    if (e.isComplete()) {
      let completeItem = this.workItems.shift()
      completeItem!.position.bestMove = e.bestMove()
      this.log(completeItem!.position)
      completeItem!.onComplete(completeItem!.position)
      if (this.workItems.length > 0) {
        this.processNextWorkItem()
      } else {
        this.allComplete()
      }
      return
    }

    var score = e.score()
    if (score != "noScore") {
      this.workItems[0].position.score = score
      this.workItems[0].position.pv = e.pv()
      return
    }
    this.log("ignored event: " + event)
  }

  enqueue(position: Position, onComplete) {
    this.workItems.push(new WorkItem(position, onComplete))
    if (this.workItems.length == 1) {
      this.processNextWorkItem()
    }
  }

  private processNextWorkItem() {
    let fen = this.workItems[0].position.fen
    this.send("position fen " + fen)
    this.send("go depth " + this.depth)
  }

  private send(m) {
    this.stockfish.postMessage(m)
    this.log(m)
  }
}
