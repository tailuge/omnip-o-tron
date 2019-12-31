export class Event {
  private readonly event: string

  private static readonly matePattern = /score mate ([^ ]*) .*/
  private static readonly centipawnPattern = /score cp ([^ ]*) .*/
  private static readonly completePattern = /bestmove (....)/
  private static readonly pvPattern = / pv (.*)/

  constructor(event) {
    this.event = event
  }

  isComplete() {
    return Event.completePattern.exec(this.event) ? true : false
  }

  bestMove() {
    var parsed = Event.completePattern.exec(this.event)
    return parsed ? parsed[1] : ""
  }

  pv() {
    var pv = Event.pvPattern.exec(this.event)
    return pv ? pv[1].split(" ") : []
  }

  score() {
    var parsedScore = Event.matePattern.exec(this.event)
    if (parsedScore) {
      return this.scoreMate(parsedScore[1])
    }
    parsedScore = Event.centipawnPattern.exec(this.event)
    if (parsedScore) {
      return this.scoreCp(parsedScore[1])
    }
    return "noScore"
  }

  private scoreCp(v) {
    if (v < 150 && v > -150) {
      return "drawn"
    }
    return v > 0 ? "win" : "lose"
  }

  private scoreMate(v) {
    return v > 0 ? "win" : "lose"
  }
}
