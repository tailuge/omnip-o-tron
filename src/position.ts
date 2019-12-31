export class Position {
  public readonly fen
  public readonly targetSquare
  public score
  public bestMove
  public pv

  constructor(fen, targetSquare) {
    this.fen = fen
    this.targetSquare = targetSquare
  }
}
