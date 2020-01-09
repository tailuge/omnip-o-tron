export class Position {
  public readonly fen
  public readonly targetSquare
  public score
  public bestMove
  public pv

  constructor(fen) {
    this.fen = fen
  }
}
