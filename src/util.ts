export function toDests(chess: any) {
  const dests = {}
  chess.SQUARES.forEach(s => {
    const ms = chess.moves({ square: s, verbose: true })
    if (ms.length) dests[s] = ms.map(m => m.to)
  })
  return dests
}

export function toColor(chess: any) {
  return chess.turn() === "w" ? "white" : "black"
}

export function repairFen(fen, sideToPlay) {
  return fen.split(" ")[0] + (sideToPlay == "w" ? " w - - 0 2" : " b - - 0 1")
}

export function successorStates(chess: any) {
  const moves = chess.moves({ verbose: true })
  return moves.map(move => nextState(chess, move))
}

export function nextState(chess: any, move: any) {
  chess.move(move)
  const fen = chess.fen()
  chess.undo()
  return {
    fen: fen,
    move: move,
    judgment: { name: move.san },
    evalBefore: "...",
    evalAfter: "..."
  }
}
