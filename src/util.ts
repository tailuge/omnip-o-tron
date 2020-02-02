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

export function toOtherColor(chess: any) {
  return chess.turn() === "w" ? "black" : "white"
}

export function successorStates(chess: any) {
  const moves = chess
    .moves({ verbose: true })
    .map(move => nextState(chess, move))
  moves.unshift({
    fen: chess.fen(),
    move: "Initial Position",
    judgment: { name: "Initial Position" },
    evalBefore: "...",
    evalAfter: "..."
  })
  return moves
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
