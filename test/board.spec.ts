import "mocha"
import { Boards } from "../src/boards"
import { Analysis } from "../src/analysis"
import { JSDOM } from "jsdom"

const game = {
  id: "92zyN44u",
  rated: false,
  variant: "standard",
  speed: "blitz",
  perf: "blitz",
  createdAt: 1527871905598,
  lastMoveAt: 1527872321799,
  status: "resign",
  players: {
    white: {
      user: { id: "jcarmen15", name: "Jcarmen15" },
      rating: 1906,
      analysis: { inaccuracy: 4, mistake: 7, blunder: 2, acpl: 54 }
    },
    black: {
      user: { id: "tailuge", name: "tailuge" },
      rating: 1611,
      analysis: { inaccuracy: 4, mistake: 10, blunder: 2, acpl: 79 }
    }
  },
  winner: "white",
  opening: {
    eco: "B13",
    name: "Caro-Kann Defense: Exchange Variation",
    ply: 5
  },
  moves:
    "e4 c6 d4 d5 exd5 cxd5 Bd3 Nf6 Ne2 Nc6 Bf4 e6 Qd2 Bd6 Nbc3 Bxf4 Qxf4 Bd7 Qg5 O-O h4 Ne4 Qf4 Nxc3 bxc3 Qf6 g4 Qxf4 Nxf4 f5 g5 Ne7 h5 a6 Kd2 Bb5 Rag1 Be8 Nxe6 Rf7 g6 Rf6 gxh7+ Kxh7 Nf4 Rf7 h6 g6 Rg5 Rd8 Rhg1 Rd6 c4 a5 c5 Rc6 c4 Rff6 cxd5 Ra6 Bxa6 bxa6 d6 Ng8 Nd5 Re6 Nf4 Re4 Nxg6 Bxg6 Rxg6 Rg4 R6xg4 fxg4 Rxg4 Nxh6 Rf4 Kg7 f3 Nf7 Rxf7+ Kxf7 Kd3 Ke6 Kc4 Kd7 d5",
  analysis: [
    { eval: 3 },
    { eval: 27 },
    { eval: 29 },
    { eval: 31 },
    { eval: 27 },
    { eval: 35 },
    { eval: 12 },
    { eval: 23 },
    { eval: 5 },
    { eval: -7 },
    { eval: 0 },
    { eval: 18 },
    { eval: -15 },
    { eval: -25 },
    { eval: -33 },
    { eval: 0 },
    { eval: -13 },
    { eval: 6 },
    {
      eval: -66,
      best: "a2a3",
      variation: "a3 O-O",
      judgment: { name: "Inaccuracy", comment: "Inaccuracy. Best move was a3." }
    },
    { eval: -65 },
    { eval: -80 },
    {
      eval: 140,
      best: "a7a6",
      variation: "a6 Qf4 b5 O-O h6 a3 Rb8 Rad1 Re8 Qd6 Qb6 g3 Nxd4 Qxb6",
      judgment: { name: "Mistake", comment: "Mistake. Best move was a6." }
    },
    {
      eval: -42,
      best: "g5d8",
      variation: "Qxd8 Raxd8 Nxe4 dxe4 Bxe4 b5 c3 Ne7 Kd2 Rfe8 Rae1 a5 g4 b4",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Qxd8." }
    },
    { eval: -11 },
    {
      eval: -67,
      best: "e2c3",
      variation: "Nxc3 Qb8 Qxb8 Raxb8 Ne2 b5 a3 Rfc8 f3 h6 Kf2 a5 Rhe1 b4",
      judgment: {
        name: "Inaccuracy",
        comment: "Inaccuracy. Best move was Nxc3."
      }
    },
    {
      eval: 71,
      best: "a8c8",
      variation: "Rc8",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Rc8." }
    },
    {
      eval: -112,
      best: "f4f6",
      variation: "Qxf6 gxf6 g4 e5 f3 Rfe8 Kf2 e4 Bb5 a6 Bxc6 Bxc6 Nf4 e3+",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Qxf6." }
    },
    {
      eval: -35,
      best: "f6e7",
      variation:
        "Qe7 Rb1 e5 dxe5 Nxe5 Rxb7 Rfe8 O-O Qxh4 Qg3 Qxg3+ fxg3 Bxg4 Nf4",
      judgment: {
        name: "Inaccuracy",
        comment: "Inaccuracy. Best move was Qe7."
      }
    },
    { eval: -43 },
    {
      eval: 66,
      best: "e6e5",
      variation:
        "e5 Nxd5 exd4 cxd4 Nxd4 O-O-O Bxg4 Bxh7+ Kxh7 Rxd4 Bf5 Rf4 Be6 Nc7",
      judgment: { name: "Mistake", comment: "Mistake. Best move was e5." }
    },
    { eval: 40 },
    { eval: 86 },
    { eval: 82 },
    {
      eval: 135,
      best: "e7c8",
      variation: "Nc8 g6 Rf6 gxh7+ Kxh7 f3 Nd6 Rb1 b6 Rg1 Rg8 Be2 Rh8 Ng6",
      judgment: {
        name: "Inaccuracy",
        comment: "Inaccuracy. Best move was Nc8."
      }
    },
    { eval: 120 },
    {
      eval: 332,
      best: "e7c8",
      variation: "Nc8 g6",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Nc8." }
    },
    {
      eval: 195,
      best: "f4e6",
      variation: "Nxe6 Rf7",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Nxe6." }
    },
    {
      eval: 460,
      best: "b5d7",
      variation: "Bd7 Re1 Kf7 c4 b5 c5 Rh8 Re3 Rac8 h6 g6 c3 Rce8 Rhe1",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Bd7." }
    },
    { eval: 453 },
    { eval: 441 },
    { eval: 435 },
    {
      eval: 561,
      best: "h7g6",
      variation: "hxg6",
      judgment: { name: "Mistake", comment: "Mistake. Best move was hxg6." }
    },
    {
      eval: 452,
      best: "g1e1",
      variation:
        "Re1 Bxg6 Nf4 Bxh5 Rxe7 Bf3 Rg1 Rf7 Rxf7 Kxf7 Bxf5 Kf6 Ke3 Kxf5",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Re1." }
    },
    {
      eval: 708,
      best: "g8h8",
      variation: "Kh8 Re1 Rc8 Nxg7 Rf7 Ne6 Bd7 Nf4 Kxh7 Re5 Kh6 Rhe1 Ng8 Rg1",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Kh8." }
    },
    {
      eval: 278,
      best: "g1g7",
      variation: "Rxg7+ Kh6 Rxe7 Rf7 Rc7 Rb8 Re1 Rxc7 Nxc7 Bf7 Re7 Rf8 Re5 Rd8",
      judgment: { name: "Blunder", comment: "Blunder. Best move was Rxg7+." }
    },
    {
      eval: 447,
      best: "e8f7",
      variation: "Bf7 Rg5 b5 Rhg1 Kh6 Be2 Rg8 Bf3 Kh7 a3 Rh6 Kc1 Rf6 Kb2",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Bf7." }
    },
    { eval: 436 },
    { eval: 438 },
    {
      eval: 280,
      best: "g1e1",
      variation: "Re1",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Re1." }
    },
    { eval: 319 },
    {
      eval: 155,
      best: "h1e1",
      variation: "Re1",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Re1." }
    },
    { eval: 186 },
    {
      eval: -174,
      best: "g5g3",
      variation: "R5g3 Kxh6",
      judgment: { name: "Blunder", comment: "Blunder. Best move was R5g3." }
    },
    {
      eval: 453,
      best: "d5c4",
      variation: "dxc4 Nxg6",
      judgment: { name: "Blunder", comment: "Blunder. Best move was dxc4." }
    },
    { eval: 424 },
    { eval: 445 },
    {
      eval: 389,
      best: "g5g3",
      variation: "R5g3 Rcf6 Re3 Bc6 c4 Kxh6 Be2 a4 Re5 dxc4 Bxc4 Rh7 d5 Nxd5",
      judgment: {
        name: "Inaccuracy",
        comment: "Inaccuracy. Best move was R5g3."
      }
    },
    {
      eval: 667,
      best: "d5c4",
      variation:
        "dxc4 Bxc4 Rff6 Re1 Rc7 Rg3 Rd7 Kc3 Bf7 Bxf7 Rxf7 Kc4 Rf6 Rge3",
      judgment: { name: "Mistake", comment: "Mistake. Best move was dxc4." }
    },
    {
      eval: 612,
      best: "g1e1",
      variation: "Re1 Kxh6 Rgg1 dxc4 Rxe7 Bf7 Be2 b5 Rh1+ Kg7 Rb7 Rc8 Bf3 b4",
      judgment: {
        name: "Inaccuracy",
        comment: "Inaccuracy. Best move was Re1."
      }
    },
    {
      eval: 1009,
      best: "c6c8",
      variation: "Rc8 d6 Nc6 Nd5 Rf8 Kc3 Rd8 Nf4 Rf6 Bc4 b6 Nd5 Rfxd6 cxd6",
      judgment: { name: "Blunder", comment: "Blunder. Best move was Rc8." }
    },
    { eval: 948 },
    { eval: 992 },
    {
      eval: 848,
      best: "g1e1",
      variation: "Re1 Rf7 d6 Kxh6 Rg3 Kh7 c6 Bxc6 dxe7 Be8 Re6 Rg7 Rh3+ Kg8",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Re1." }
    },
    {
      eval: 1270,
      best: "e7c6",
      variation: "Nc6 Kc3",
      judgment: { name: "Mistake", comment: "Mistake. Best move was Nc6." }
    },
    { eval: 1000 },
    { eval: 1138 },
    { eval: 1067 },
    { eval: 1130 },
    { eval: 1012 },
    { eval: 2280 },
    { eval: 1672 },
    {
      mate: 8,
      best: "g8h6",
      variation: "Nxh6 Rg7+",
      judgment: {
        name: "Inaccuracy",
        comment: "Checkmate is now unavoidable. Best move was Nxh6."
      }
    },
    { mate: 9 },
    { mate: 15 },
    { eval: 5579 },
    {
      mate: 9,
      best: "g8f6",
      variation: "Nf6 Rf4 Nd5 Rf7+ Kg6 d7 Kxf7 d8=Q Nf6 Qxf6+ Kxf6 h7 Kg7 c6",
      judgment: {
        name: "Inaccuracy",
        comment: "Checkmate is now unavoidable. Best move was Nf6."
      }
    },
    { mate: 8 },
    { mate: 8 },
    { mate: 13 },
    { mate: 13 },
    { mate: 12 },
    { mate: 14 },
    { mate: 13 },
    { mate: 13 },
    { mate: 12 },
    { mate: 12 },
    { mate: 11 }
  ],
  clock: { initial: 300, increment: 0, totalTime: 300 }
}

const player = "tailuge"

describe("Boards", () => {
  it("Should render example data without exception", done => {
    const dom = new JSDOM(
      '<!doctype html><html><body><div id="chessground-examples"></div></body></html>'
    )
    let boards = new Boards(
      dom.window.document.getElementById("chessground-examples")
    )
    boards.setPuzzles(new Analysis(game).puzzles(player))
    done()
  })
})
