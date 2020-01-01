import "mocha"
import { Analysis } from "../src/analysis"

const games = [
  {
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
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was a3."
        }
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
        variation:
          "Rxg7+ Kh6 Rxe7 Rf7 Rc7 Rb8 Re1 Rxc7 Nxc7 Bf7 Re7 Rf8 Re5 Rd8",
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
  },
  {
    id: "kiq0tzlD",
    rated: false,
    variant: "standard",
    speed: "blitz",
    perf: "blitz",
    createdAt: 1527777666834,
    lastMoveAt: 1527778119646,
    status: "resign",
    players: {
      white: {
        user: { id: "tailuge", name: "tailuge" },
        rating: 1611,
        analysis: { inaccuracy: 4, mistake: 2, blunder: 3, acpl: 92 }
      },
      black: {
        user: { id: "vasif00", name: "vasif00" },
        rating: 1762,
        analysis: { inaccuracy: 2, mistake: 1, blunder: 5, acpl: 138 }
      }
    },
    winner: "white",
    opening: {
      eco: "C30",
      name: "King's Gambit Declined, Miles Defense",
      ply: 6
    },
    moves:
      "e4 e5 f4 Nc6 Nf3 f5 d3 d6 Be2 Nf6 O-O Be7 fxe5 dxe5 exf5 O-O Nc3 Bxf5 Nxe5 Nxe5 Rxf5 Ng6 Bh5 Nh4 Rf1 g6 Be2 Qd4+ Kh1 c6 Bh6 Rfe8 Ne4 Nxe4 dxe4 Qxe4 Bf3 Nxf3 Rxf3 Rad8 Qf1 Qd5 Re1 Qb5 c4 Qxb2 Rxe7",
    analysis: [
      { eval: 3 },
      { eval: 37 },
      {
        eval: -61,
        best: "g1f3",
        variation: "Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nf3."
        }
      },
      {
        eval: 0,
        best: "e5f4",
        variation: "exf4 Nf3 d6 d4 g5 h4 g4 Ng1 Bh6 Nc3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was exf4."
        }
      },
      { eval: 11 },
      { eval: 48 },
      { eval: 5 },
      { eval: 8 },
      { eval: 24 },
      { eval: 25 },
      { eval: 17 },
      { eval: 27 },
      {
        eval: -52,
        best: "b1c3",
        variation: "Nc3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nc3."
        }
      },
      { eval: -46 },
      { eval: -39 },
      {
        eval: 38,
        best: "c8f5",
        variation:
          "Bxf5 Kh1 Qd5 Nc3 Qd7 Be3 O-O-O Nd2 Rhf8 Bf3 Nd4 Bg1 Kb8 Nc4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Bxf5."
        }
      },
      {
        eval: -40,
        best: "g1h1",
        variation: "Kh1 e4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Kh1."
        }
      },
      { eval: -48 },
      {
        eval: -352,
        best: "g1h1",
        variation: "Kh1 Qd7 a3 Bc5 b4 Bd4 Bd2 a6 Qb1 h6 Nh4 Bh7 Nf3 Kh8",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Kh1." }
      },
      { eval: -342 },
      { eval: -366 },
      {
        eval: 138,
        best: "d8d4",
        variation: "Qd4+",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Qd4+." }
      },
      {
        eval: -129,
        best: "d3d4",
        variation: "d4 Qd7 Qd3 Kh8 Bg5 c6 Raf1 Rad8 Rd1 Rde8 a3 Bd8 Bxf6 Rxf6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was d4." }
      },
      { eval: -116 },
      {
        eval: -343,
        best: "f5f6",
        variation: "Rxf6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Rxf6." }
      },
      {
        eval: 62,
        best: "d8d4",
        variation:
          "Qd4+ Kh1 Nxh5 Bd2 Rxf1+ Qxf1 Rf8 Qe2 Qf2 Be3 Qxe2 Nxe2 Nf6 Rf1",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Qd4+." }
      },
      { eval: 24 },
      { eval: 42 },
      { eval: 17 },
      {
        eval: 533,
        best: "f6g4",
        variation:
          "Ng4 Bxg4 Qxg4 Rg1 Qxd1 Nxd1 Rae8 Bh6 Rf7 Nc3 Nf5 Bd2 Bb4 Rgf1",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Ng4." }
      },
      {
        eval: 130,
        best: "f1f4",
        variation: "Rf4 Qd7 Rxh4 Nd5 Re4 Nf6 Rf4 Rae8 Rf1 Bb4 Bh6 Rf7 Bf3 Bf8",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Rf4." }
      },
      {
        eval: 533,
        best: "f6g4",
        variation:
          "Ng4 Rxf8+ Bxf8 Bxg4 Bxh6 g3 Nf5 Bxf5 gxf5 Qh5 Qf6 Re1 Rf8 Re8",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Ng4." }
      },
      {
        eval: 28,
        best: "f1f4",
        variation: "Rf4",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Rf4." }
      },
      { eval: 41 },
      { eval: 55 },
      { eval: 61 },
      {
        eval: -8,
        best: "f1f2",
        variation:
          "Rf2 Nf5 Bf4 Bh4 Bd3 Qd4 Rf1 Ne3 Bxe3 Rxe3 Bxg6 Qxd1 Bf7+ Kg7",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Rf2."
        }
      },
      { eval: -17 },
      { eval: -37 },
      { eval: -8 },
      { eval: -8 },
      { eval: -8 },
      { eval: -7 },
      {
        eval: 143,
        best: "e7c5",
        variation: "Bc5 h3 Rxe1 Qxe1 Qd1 Rf1 Qxe1 Rxe1 Rd5 g4 Kf7 Bf4 Bd6 Be3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Bc5." }
      },
      { eval: 119 },
      {
        mate: 11,
        best: "b5h5",
        variation:
          "Qh5 Rxe7 Qxh6 Rxb7 Rd2 h3 Rde2 Rb8 Re4 Rxe8+ Rxe8 Rf7 Re1 Qxe1",
        judgment: {
          name: "Blunder",
          comment: "Checkmate is now unavoidable. Best move was Qh5."
        }
      },
      { mate: 10 }
    ],
    clock: { initial: 300, increment: 0, totalTime: 300 }
  },
  {
    id: "mmQfcCGu",
    rated: false,
    variant: "standard",
    speed: "blitz",
    perf: "blitz",
    createdAt: 1527758114503,
    lastMoveAt: 1527758668228,
    status: "outoftime",
    players: {
      white: {
        user: { id: "wearykahn", name: "Wearykahn" },
        rating: 1555,
        analysis: { inaccuracy: 6, mistake: 5, blunder: 2, acpl: 53 }
      },
      black: {
        user: { id: "tailuge", name: "tailuge" },
        rating: 1611,
        analysis: { inaccuracy: 7, mistake: 8, blunder: 2, acpl: 65 }
      }
    },
    winner: "white",
    opening: {
      eco: "B13",
      name: "Caro-Kann Defense: Exchange Variation",
      ply: 5
    },
    moves:
      "e4 c6 d4 d5 exd5 Bf5 dxc6 Nxc6 c3 e6 Bb5 a6 Bxc6+ bxc6 b4 Nf6 Bb2 Nd5 Nf3 Bd6 Nbd2 Bd3 Nb3 Bc4 Na5 Bb5 a4 Nxb4 axb5 cxb5 O-O Nd5 Nb7 Qd7 Nxd6+ Qxd6 Qd2 Qf4 Qxf4 Nxf4 Rfe1 O-O Ne5 f6 Nd7 Rfd8 Nc5 Rd6 g3 Ng6 Rxe6 Rxe6 Nxe6 Ne7 Nc5 a5 Nb3 a4 Nc5 Nc6 Ba3 Na5 Kf1 Nc4 Ke2 Re8+ Kd3 Nxa3 Rxa3 Re1 Ra2 Rd1+ Ke2 Rb1 h4 h5 Nd3 Kf7 Nb4 g5 hxg5 fxg5 Kf3 g4+ Kg2 Ke6 Re2+ Kd6 Re5 Rb3 Rc5",
    analysis: [
      { eval: 3 },
      { eval: 27 },
      { eval: 29 },
      { eval: 31 },
      { eval: 27 },
      {
        eval: 94,
        best: "c6d5",
        variation: "cxd5 Bd3 Nc6 c3 e5 dxe5 Nxe5 Qe2 Qe7 Be3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was cxd5."
        }
      },
      { eval: 95 },
      { eval: 87 },
      { eval: 103 },
      { eval: 112 },
      {
        eval: 35,
        best: "g1f3",
        variation: "Nf3 Nf6",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nf3."
        }
      },
      {
        eval: 99,
        best: "d8d5",
        variation:
          "Qd5 Bf1 e5 Nf3 exd4 cxd4 Bxb1 Rxb1 Bb4+ Bd2 Bxd2+ Qxd2 Nf6 Be2",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Qd5."
        }
      },
      { eval: 93 },
      { eval: 80 },
      {
        eval: -14,
        best: "g1f3",
        variation: "Nf3 Nf6",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nf3."
        }
      },
      { eval: -15 },
      { eval: -39 },
      { eval: -2 },
      { eval: -27 },
      { eval: 0 },
      {
        eval: -50,
        best: "e1g1",
        variation: "O-O a5 a3 axb4 axb4 Rxa1 Bxa1 O-O Re1 Nf4 Nbd2 Qf6 Nc4 Qg6",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was O-O."
        }
      },
      { eval: -25 },
      {
        eval: -116,
        best: "f3e5",
        variation:
          "Ne5 Bxe5 Qf3 Bxd4 Qxd3 Bf6 Ne4 O-O O-O a5 Rab1 axb4 cxb4 Bxb2",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Ne5."
        }
      },
      {
        eval: 106,
        best: "d5f4",
        variation: "Nf4 Rg1 Bb5 Nc1 a5 Qc2 axb4 c4 Ba4 Nb3 Qf6 Kf1 O-O Rd1",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nf4." }
      },
      { eval: 122 },
      {
        eval: 391,
        best: "d5b6",
        variation:
          "Nb6 Nxc4 Nxc4 Qb3 Nxb2 Qxb2 O-O a4 Qc7 O-O Rfb8 Rfc1 c5 dxc5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nb6." }
      },
      { eval: 377 },
      {
        eval: 637,
        best: "d8c7",
        variation: "Qc7 axb5 cxb5 O-O O-O Qd3 h6 Nb3 Nb6 Bc1 Rfc8 Nc5 a5 Qxb5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Qc7." }
      },
      { eval: 609 },
      {
        eval: 757,
        best: "b4d5",
        variation: "Nd5 Nb7 Qc7 Nxd6+ Qxd6 O-O cxb5 c4 Nb4 Bc3 a5 Qb1 O-O Rxa5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nd5." }
      },
      {
        eval: 606,
        best: "a5b7",
        variation:
          "Nb7 Qb6 Nxd6+ Qxd6 Ba3 Qf4 Bxb4 Qe4+ Qe2 Qxe2+ Kxe2 h6 Nd2 f5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nb7." }
      },
      { eval: 607 },
      { eval: 599 },
      { eval: 599 },
      { eval: 600 },
      { eval: 599 },
      {
        eval: 351,
        best: "c3c4",
        variation: "c4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was c4." }
      },
      { eval: 360 },
      { eval: 349 },
      { eval: 331 },
      { eval: 298 },
      { eval: 299 },
      { eval: 270 },
      {
        eval: 322,
        best: "a6a5",
        variation: "a5",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was a5."
        }
      },
      { eval: 332 },
      {
        eval: 397,
        best: "f8e8",
        variation: "Rfe8 Nc5 a5 g3 Nd5 Rxe6 Rxe6 Nxe6 a4 Kg2 g5 Nc5 g4 Kf1",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Rfe8."
        }
      },
      { eval: 386 },
      { eval: 401 },
      { eval: 379 },
      {
        eval: 531,
        best: "f4d5",
        variation: "Nd5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nd5." }
      },
      { eval: 520 },
      { eval: 528 },
      { eval: 521 },
      { eval: 525 },
      { eval: 507 },
      { eval: 496 },
      {
        eval: 395,
        best: "c5b7",
        variation:
          "Nb7 Ra7 Nxa5 Nd5 Kf1 Nb6 Nb3 Rxa1+ Bxa1 Kf7 Nc5 Ke7 Ke2 Nd7",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nb7." }
      },
      { eval: 420 },
      { eval: 401 },
      {
        eval: 483,
        best: "e7d5",
        variation:
          "Nd5 Kf1 Kf7 Ke2 a3 Rxa3 Rxa3 Bxa3 Nxc3+ Kd3 Nd5 Ne4 Ke6 Nc3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nd5."
        }
      },
      { eval: 440 },
      { eval: 439 },
      { eval: 434 },
      { eval: 431 },
      { eval: 411 },
      {
        eval: 485,
        best: "g8f7",
        variation: "Kf7 Kd3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Kf7."
        }
      },
      { eval: 469 },
      {
        eval: 603,
        best: "f6f5",
        variation: "f5 Bc1 a3 Nb3 Ra8 d5 a2 Nd4 Nd6 Bf4 Ne4 f3 Nf6 d6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was f5." }
      },
      { eval: 596 },
      { eval: 597 },
      { eval: 564 },
      { eval: 605 },
      { eval: 590 },
      {
        eval: 944,
        best: "d1c1",
        variation: "Rc1 Kd2 Rh1 h4 g5 hxg5 Rf1 Nd3 fxg5 Rb2 a3 Ra2 h5 d5",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Rc1." }
      },
      {
        eval: 590,
        best: "d4d5",
        variation: "d5 b4 d6 bxc3 d7 Rb8 Ne6 Kf7 d8=Q Rxd8 Nxd8+ Ke7 Nc6+ Kd6",
        judgment: { name: "Blunder", comment: "Blunder. Best move was d5." }
      },
      {
        eval: 954,
        best: "g8f7",
        variation: "Kf7 d5 b4 Nxa4 Rb3 cxb4 Ke7 Nc5 Rxb4 Ra6 Rd4 Re6+ Kd8 d6",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Kf7." }
      },
      {
        eval: 558,
        best: "d4d5",
        variation: "d5 b4 d6 bxc3 d7 Rb8 Ne6 Kf7 d8=Q Rxd8 Nxd8+ Ke7 Nc6+ Kd6",
        judgment: { name: "Blunder", comment: "Blunder. Best move was d5." }
      },
      { eval: 536 },
      {
        eval: 425,
        best: "e2d2",
        variation:
          "Kd2 Rh1 Rb2 g5 Rxb5 gxh4 gxh4 Rxh4 Ra5 Rh1 Rxa4 h4 Ra7+ Kg6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Kd2." }
      },
      { eval: 415 },
      {
        eval: 334,
        best: "b4d5",
        variation: "Nd5 Ke6 c4 bxc4 Ne3 c3 d5+ Kd7 Rxa4 Rb2+ Kf3 Rd2 Ra7+ Kd8",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nd5."
        }
      },
      { eval: 381 },
      { eval: 342 },
      {
        eval: 492,
        best: "b1b3",
        variation: "Rb3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Rb3." }
      },
      {
        eval: 345,
        best: "f3e4",
        variation: "Ke4 Rc1 Nd5 Rh1 Ne3 Rh2 Kd5 h4 Nxg4 Rh3 gxh4 Rxc3 Ne3 Kf6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Ke4." }
      },
      {
        eval: 509,
        best: "b1b3",
        variation: "Rb3 Nd5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Rb3." }
      },
      { eval: 472 },
      {
        eval: 536,
        best: "e6f7",
        variation:
          "Kf7 Re5 Rb3 Rf5+ Kg6 Rxb5 Rxc3 Nd5 Rc4 Nf4+ Kf7 Rb7+ Kf6 Nxh5+",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Kf7."
        }
      },
      { eval: 528 },
      { eval: 507 },
      {
        eval: 452,
        best: "e5d5",
        variation:
          "Rd5+ Ke6 Rxh5 Rxc3 Rxb5 Rb3 Re5+ Kd7 Nd5 Kc6 Ne3 Kb7 Nc4 Rd3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Rd5+."
        }
      }
    ],
    clock: { initial: 300, increment: 0, totalTime: 300 }
  },
  {
    id: "NUdCwF0F",
    rated: false,
    variant: "standard",
    speed: "blitz",
    perf: "blitz",
    createdAt: 1527660912265,
    lastMoveAt: 1527661082438,
    status: "mate",
    players: {
      white: {
        user: { id: "tailuge", name: "tailuge" },
        rating: 1611,
        analysis: { inaccuracy: 2, mistake: 1, blunder: 0, acpl: 29 }
      },
      black: {
        user: { id: "darkartmaster", name: "DARKARTMASTER" },
        rating: 1768,
        provisional: true,
        analysis: { inaccuracy: 1, mistake: 4, blunder: 1, acpl: 84 }
      }
    },
    winner: "white",
    opening: {
      eco: "C37",
      name: "King's Gambit Accepted, Muzio Gambit, Sarratt Defense",
      ply: 12
    },
    moves:
      "e4 e5 f4 exf4 Nf3 g5 Bc4 g4 O-O gxf3 Qxf3 Qf6 d3 Bh6 Nc3 Nc6 Nd5 Qd4+ Kh1 Ne5 Qh5 Nxc4 dxc4 d6 Bxf4 Bxf4 Rxf4 Be6 Nxc7+ Kd7 Nxe6 fxe6 Rf7+ Kc6 Qb5#",
    analysis: [
      { eval: 3 },
      { eval: 37 },
      {
        eval: -61,
        best: "g1f3",
        variation: "Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nf3."
        }
      },
      { eval: -39 },
      { eval: -25 },
      { eval: -35 },
      {
        eval: -90,
        best: "h2h4",
        variation: "h4 d5 d4 dxe4 Nxg5 Nf6 Nc3 Bb4 Bc4 Bg4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was h4."
        }
      },
      { eval: -99 },
      { eval: -83 },
      { eval: -73 },
      { eval: -132 },
      { eval: -105 },
      { eval: -94 },
      { eval: -54 },
      { eval: -70 },
      {
        eval: 0,
        best: "g8e7",
        variation:
          "Ne7 Bxf4 Qxf4 Qxf4 Bxf4 Rxf4 d6 Nb5 Na6 Bxf7+ Kd8 Raf1 Bd7 Nc3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Ne7."
        }
      },
      { eval: -7 },
      {
        eval: 111,
        best: "f6d6",
        variation: "Qd6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Qd6." }
      },
      { eval: 107 },
      {
        eval: 379,
        best: "d4e5",
        variation: "Qe5 c3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Qe5." }
      },
      { eval: 367 },
      { eval: 402 },
      { eval: 405 },
      { eval: 407 },
      { eval: 403 },
      { eval: 385 },
      { eval: 425 },
      {
        eval: 615,
        best: "c8d7",
        variation:
          "Bd7 Nxc7+ Kd8 Nxa8 f5 Rd1 Nf6 Rxd4 Nxh5 Rf1 Ng7 Rfd1 Ne8 e5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Bd7." }
      },
      { eval: 606 },
      { eval: 609 },
      { eval: 572 },
      {
        eval: 1182,
        best: "d4e5",
        variation: "Qe5 Rxf7+",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Qe5." }
      },
      {
        eval: 812,
        best: "h5b5",
        variation:
          "Qb5+ Kd8 Rf8+ Ke7 Rxa8 Nh6 Qxb7+ Kf6 Rxh8 Kg5 Qe7+ Qf6 Rxh7 Qxe7",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Qb5+." }
      },
      {
        mate: 1,
        best: "g8e7",
        variation:
          "Ne7 Qb5+ Kc8 Rxe7 Qb6 Qd7+ Kb8 Re8+ Rxe8 Qxe8+ Kc7 Qxa8 Qxb2 Rf1",
        judgment: {
          name: "Mistake",
          comment: "Checkmate is now unavoidable. Best move was Ne7."
        }
      }
    ],
    clock: { initial: 300, increment: 0, totalTime: 300 }
  },
  {
    id: "LU6oDId7",
    rated: false,
    variant: "standard",
    speed: "blitz",
    perf: "blitz",
    createdAt: 1527575053740,
    lastMoveAt: 1527575430282,
    status: "resign",
    players: {
      white: {
        user: { id: "copperhead", name: "Copperhead" },
        rating: 1614,
        analysis: { inaccuracy: 4, mistake: 1, blunder: 1, acpl: 37 }
      },
      black: {
        user: { id: "tailuge", name: "tailuge" },
        rating: 1611,
        analysis: { inaccuracy: 5, mistake: 3, blunder: 1, acpl: 54 }
      }
    },
    winner: "white",
    opening: { eco: "D10", name: "Slav Defense #2", ply: 5 },
    moves:
      "d4 c6 c4 d5 Nc3 Bf5 Bf4 e6 e3 Bd6 Bg3 Bxg3 hxg3 Nf6 Be2 Ne4 Nf3 Nxc3 bxc3 Nd7 cxd5 exd5 Nh4 Be6 Bd3 Nf6 Qc2 Qa5 Ke2 Ne4 Rhc1 O-O-O Bxe4 dxe4 Qxe4 Bc4+ Kd2 g6 Nf3 f5 Qc2 Bd5 Rcb1 Be4 Qb3 Bxb1 Rxb1 b6 Qe6+ Kb8 Qe5+ Qxe5 Nxe5 c5 Nc6+ Kc7 Nxd8 Rxd8 a4 cxd4 cxd4 Rd5 Rb5 Rxb5 axb5 a6 bxa6 Kb8 Kc3",
    analysis: [
      { eval: 8 },
      { eval: 21 },
      { eval: 15 },
      { eval: 47 },
      { eval: 2 },
      {
        eval: 90,
        best: "g8f6",
        variation: "Nf6 cxd5 cxd5 Nf3 Nc6 Bf4 Nh5 Bd2 Nf6 e3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nf6."
        }
      },
      {
        eval: 28,
        best: "d1b3",
        variation: "Qb3 Qb6 Qxb6 axb6 cxd5 Nf6 dxc6 Nxc6 e3 Nb4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Qb3."
        }
      },
      { eval: 25 },
      { eval: 12 },
      { eval: 38 },
      { eval: 10 },
      { eval: 25 },
      { eval: 24 },
      { eval: 23 },
      { eval: 4 },
      {
        eval: 54,
        best: "d8b6",
        variation: "Qb6 b3 Qb4 Qd2 O-O f3 h6 g4 Bg6 Nh3 dxc4 bxc4 Nbd7 Kf1",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Qb6."
        }
      },
      { eval: 20 },
      { eval: 23 },
      { eval: 20 },
      { eval: 55 },
      { eval: 35 },
      { eval: 41 },
      { eval: 32 },
      { eval: 42 },
      { eval: 0 },
      {
        eval: 52,
        best: "g7g6",
        variation: "g6 Nf3 O-O Kf1 Re8 Rh4 b6 g4 Nf6 Ne5 Nd7 Nf3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was g6."
        }
      },
      { eval: 15 },
      { eval: 50 },
      {
        eval: 0,
        best: "e1g1",
        variation: "O-O",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was O-O."
        }
      },
      { eval: 10 },
      { eval: -6 },
      {
        eval: 96,
        best: "e4d6",
        variation: "Nd6 Nf3 Rc8 a4 g6 Nd2 O-O Kf1 Qd8 c4 c5 cxd5 cxd4 Qb2",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nd6." }
      },
      { eval: 50 },
      { eval: 41 },
      { eval: 54 },
      { eval: 53 },
      {
        eval: -15,
        best: "e2e1",
        variation: "Ke1 Kb8 Nf5 Rhg8 f3 Ka8 Kf2 g6 Nh6 Rge8 Qf4 f5 Kg1 a6",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Ke1."
        }
      },
      { eval: 0 },
      { eval: -35 },
      {
        eval: 55,
        best: "h8e8",
        variation: "Rhe8",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Rhe8."
        }
      },
      { eval: 31 },
      { eval: 71 },
      {
        eval: -48,
        best: "d2e1",
        variation: "Ke1 c5 Kf1 Qa6+ Kg1 Bxf3 gxf3 h5 Kg2 h4 Rh1 hxg3 fxg3 Qe6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Ke1." }
      },
      { eval: -36 },
      { eval: -45 },
      { eval: -35 },
      { eval: -46 },
      {
        eval: 20,
        best: "d8d7",
        variation: "Rd7 a4 Re8 Ke1 Rc7 Kf1 c5 c4 cxd4 exd4 Qb6 Qc2 Qc6 Ne5",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Rd7."
        }
      },
      {
        eval: -43,
        best: "d2e2",
        variation: "Ke2 Rhe8 Kf1 Kb8 a4 Kb7 Kg1 Ka8 Rc1 Qa6 Ne5 Qb7 Rb1 Rb8",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Ke2."
        }
      },
      { eval: -46 },
      { eval: -48 },
      { eval: -43 },
      { eval: -43 },
      {
        eval: 176,
        best: "d8c8",
        variation: "Rc8 Rh1 Kc7 a4 Rce8 c4 Re6 a5 bxa5 Ra1 Ra8 Rxa5 Kb6 Ra1",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Rc8." }
      },
      { eval: 169 },
      { eval: 174 },
      { eval: 177 },
      { eval: 176 },
      { eval: 161 },
      { eval: 177 },
      { eval: 145 },
      { eval: 153 },
      { eval: 148 },
      {
        eval: 314,
        best: "d5d8",
        variation: "Rd8 Rb1 Kd6 f3 Rd7 Kd3 Rf7 a5 bxa5 Rb5 Kc6 Rxa5 Kb6 Ra1",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Rd8." }
      },
      { eval: 268 },
      {
        eval: 1391,
        best: "c7d6",
        variation: "Kd6 Kc3",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Kd6." }
      },
      { eval: 1367 },
      { eval: 1322 },
      {
        eval: 557,
        best: "d4d5",
        variation: "d5 g5 d6 f4 exf4 gxf4 gxf4 h5 a7+ Kxa7 d7 Kb7 d8=Q h4",
        judgment: { name: "Blunder", comment: "Blunder. Best move was d5." }
      }
    ],
    clock: { initial: 300, increment: 0, totalTime: 300 }
  },
  {
    id: "fsai7SDG",
    rated: false,
    variant: "standard",
    speed: "blitz",
    perf: "blitz",
    createdAt: 1527516794575,
    lastMoveAt: 1527517308592,
    status: "resign",
    players: {
      white: {
        user: { id: "matisegura96", name: "matisegura96" },
        rating: 1611,
        analysis: { inaccuracy: 7, mistake: 7, blunder: 1, acpl: 73 }
      },
      black: {
        user: { id: "tailuge", name: "tailuge" },
        rating: 1611,
        analysis: { inaccuracy: 6, mistake: 8, blunder: 0, acpl: 62 }
      }
    },
    winner: "black",
    opening: {
      eco: "B12",
      name: "Caro-Kann Defense: Advance Variation",
      ply: 5
    },
    moves:
      "d4 c6 e4 d5 e5 Bf5 f4 e6 Nf3 h6 Be2 Qb6 c3 c5 Be3 c4 b3 Bxb1 Rxb1 Qa5 Qc2 b5 bxc4 bxc4 O-O Ne7 Rb7 Nf5 Bf2 Ba3 Rfb1 O-O R1b5 Qd8 Qa4 Bc1 g3 Be3 Rxa7 Bxf2+ Kxf2 Rxa7 Qxa7 Nc6 Qc5 Nfe7 Bd1 Qa8 a3 Qa7 Qxa7 Nxa7 Rb7 Nac6 Ba4 Ra8 Bb5 Rxa3 Rc7 Rxc3 Bxc6 Nxc6 Rxc6 Rc2+ Ke1 Rc3 Kd2 Rxf3 Kc2 Rf2+",
    analysis: [
      { eval: 8 },
      { eval: 21 },
      { eval: 29 },
      { eval: 42 },
      {
        eval: -8,
        best: "b1c3",
        variation: "Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 Nf3 e6 Be2 Nf6",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nc3."
        }
      },
      { eval: 28 },
      { eval: 0 },
      { eval: 0 },
      { eval: 0 },
      { eval: 35 },
      { eval: 26 },
      {
        eval: 105,
        best: "f8b4",
        variation: "Bb4+ c3 Ba5 a4 Nd7 O-O Bb6 Nbd2 a5 b3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Bb4+."
        }
      },
      {
        eval: 37,
        best: "a2a4",
        variation: "a4 a5 c3 h5 O-O Be7 Ng5 h4 Nd2 h3 g4 Bg6 b3 c5",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was a4."
        }
      },
      { eval: 55 },
      {
        eval: -28,
        best: "b1d2",
        variation: "Nbd2 Nc6 Nb3 c4 Nbd2 Nge7 b3 cxb3 axb3 Rc8 g3 Bh3 b4 Nf5",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nbd2."
        }
      },
      {
        eval: 139,
        best: "b6b2",
        variation: "Qxb2 Qb3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Qxb2." }
      },
      { eval: 105 },
      {
        eval: 310,
        best: "b8d7",
        variation:
          "Nd7 O-O Ne7 Nbd2 Qa5 bxc4 Qxc3 Qb3 Qxb3 axb3 h5 Nh4 g6 Nxf5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nd7." }
      },
      { eval: 251 },
      {
        eval: 452,
        best: "c4b3",
        variation: "cxb3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was cxb3." }
      },
      {
        eval: 328,
        best: "b3c4",
        variation: "bxc4 dxc4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was bxc4." }
      },
      {
        eval: 443,
        best: "g8e7",
        variation: "Ne7 bxc4 dxc4 Bxc4 Qc7 Bd3 Nbc6 O-O b6 c4 Rc8 Qa4 Qd7 Qb5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Ne7." }
      },
      { eval: 365 },
      { eval: 385 },
      {
        eval: 292,
        best: "f3h4",
        variation:
          "Nh4 Ne7 f5 exf5 Nxf5 Nxf5 Qxf5 Be7 Qc8+ Qd8 Qxd8+ Bxd8 Bf3 Nc6",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nh4."
        }
      },
      { eval: 264 },
      {
        eval: 129,
        best: "f3h4",
        variation: "Nh4 g6 g4 Rg8 Kh1 Nd7 f5 g5 fxe6 fxe6 Nf5 Ng6 Ng3 O-O-O",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nh4." }
      },
      {
        eval: 221,
        best: "a5a6",
        variation: "Qa6 Rfb1 Nd7 R7b5 h5 Nh4 g6 Bc1 Nb6 Bd1 Rb8 a4 Qc8 Ba3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Qa6."
        }
      },
      {
        eval: 167,
        best: "e3d2",
        variation: "Bd2 Qa6 Rfb1 Nd7 Rc7 Rc8 Rxc8+ Qxc8 g4 Ne7 f5 Nb6 Nh4 Qd7",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Bd2."
        }
      },
      {
        eval: 347,
        best: "a5a6",
        variation: "Qa6 Rfb1 Nd7 g4 Ne7 f5 Nb6 Rc7 Rc8 Rxc8+ Qxc8 Nh4 Qd7 Bg3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Qa6." }
      },
      {
        eval: 238,
        best: "f3h4",
        variation: "Nh4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nh4." }
      },
      {
        eval: 354,
        best: "b8d7",
        variation: "Nd7",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nd7." }
      },
      {
        eval: 114,
        best: "g2g4",
        variation:
          "g4 Ne7 f5 Nbc6 f6 Rfb8 Rxb8+ Rxb8 Rxb8+ Nxb8 fxe7 Bxe7 Be3 Nc6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was g4." }
      },
      {
        eval: 264,
        best: "a5a6",
        variation: "Qa6 g4 Ne7 Qb1 Nbc6 Bh4 Ng6 Bg3 Nd8 Rc7 Ne7 g5 Ndc6 gxh6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Qa6." }
      },
      {
        eval: 194,
        best: "g2g4",
        variation: "g4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was g4."
        }
      },
      { eval: 232 },
      {
        eval: 154,
        best: "g2g4",
        variation:
          "g4 Ne7 f5 exf5 gxf5 Nd7 Rxa7 Rxa7 Qxa7 Re8 a4 Nxf5 Rxd5 Re7",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was g4."
        }
      },
      {
        eval: 252,
        best: "d8e8",
        variation:
          "Qe8 Bd1 Nc6 Bc2 Ne3 Bxe3 Bxe3+ Kg2 Rb8 Rxb8 Nxb8 Rb1 Qxa4 Bxa4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Qe8."
        }
      },
      {
        eval: 106,
        best: "b5c5",
        variation: "Rc5 a5 Qb5 Bxf2+ Kxf2 g6 Bd1 Na6 Rc6 Qe8 Ba4 Nb8 Rcb6 Qxb5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Rc5." }
      },
      { eval: 123 },
      { eval: 94 },
      {
        eval: 171,
        best: "b8c6",
        variation:
          "Nc6 Ra6 Nfe7 Bd1 Rb8 g4 Qc7 Rxb8 Qxb8 Rxc6 Nxc6 Qxc6 Qb1 Be2",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nc6."
        }
      },
      { eval: 172 },
      { eval: 176 },
      { eval: 133 },
      {
        eval: 193,
        best: "d8a8",
        variation: "Qa8",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Qa8."
        }
      },
      { eval: 186 },
      { eval: 200 },
      { eval: 176 },
      { eval: 199 },
      { eval: 182 },
      { eval: 197 },
      { eval: 169 },
      { eval: 167 },
      {
        eval: 0,
        best: "a3a4",
        variation: "a4 Ra8 g4 g6 Nh4 Kf8 Rb6 Ke8 f5 Kd7 Bc2 Kc7 Rb1 exf5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was a4." }
      },
      { eval: 8 },
      { eval: 0 },
      { eval: 0 },
      { eval: 0 },
      {
        eval: 237,
        best: "a3a7",
        variation: "Ra7 Rxa7 Nxa7 Ba4 Nec8 Ke3 f5 Kd2 Kf7 h3 Nb6 Bc2 Nb5 Ne1",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Ra7." }
      },
      { eval: 185 },
      {
        eval: 235,
        best: "c3c2",
        variation: "Rc2+ Ke1 Kf8 g4 g6 Ba4 Ra2 Bd1 Ke8 Rb7 Nc6 h3 Ra1 h4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Rc2+."
        }
      },
      { eval: 235 },
      { eval: 240 },
      { eval: 229 },
      { eval: 247 },
      {
        eval: -344,
        best: "f3g1",
        variation: "Ng1 g6 Kf2 Kf8 Rc8+ Ke7 Rh8 Rd3 Ne2 h5 Ra8 Rb3 Ra7+ Kf8",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Ng1." }
      },
      { eval: -284 },
      {
        eval: -405,
        best: "f4f5",
        variation:
          "f5 Rd3+ Kc2 exf5 Rc8+ Kh7 Rc7 Rxd4 Rxf7 Re4 Rxf5 Kg6 Rf8 Rxe5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was f5." }
      },
      { eval: -379 }
    ],
    clock: { initial: 300, increment: 0, totalTime: 300 }
  },
  {
    id: "E7hZF1b4",
    rated: false,
    variant: "standard",
    speed: "blitz",
    perf: "blitz",
    createdAt: 1527503341833,
    lastMoveAt: 1527503939681,
    status: "outoftime",
    players: {
      white: {
        user: { id: "kap", name: "kap" },
        rating: 1645,
        analysis: { inaccuracy: 6, mistake: 9, blunder: 3, acpl: 74 }
      },
      black: {
        user: { id: "tailuge", name: "tailuge" },
        rating: 1611,
        analysis: { inaccuracy: 9, mistake: 5, blunder: 3, acpl: 90 }
      }
    },
    winner: "black",
    opening: {
      eco: "B13",
      name: "Caro-Kann Defense: Exchange Variation",
      ply: 5
    },
    moves:
      "e4 c6 d4 d5 exd5 cxd5 Nf3 Bf5 Bd3 Bxd3 Qxd3 e6 O-O Nc6 Bf4 Bd6 Be5 Bxe5 dxe5 Nge7 Nc3 Ng6 Rfe1 O-O a3 a6 Qd1 Qc7 Qe2 Nf4 Qd1 Ng6 Qe2 b5 Na2 Na5 Nb4 Nc4 g3 Nxb2 Nd4 Na4 Nbc6 Nc3 Qg4 Ne4 h4 h6 h5 Ne7 Nxe7+ Qxe7 a4 Qc5 Qd1 b4 Nb3 Qc7 Nd4 Nc3 Qg4 Ne4 Rxe4 dxe4 Qxe4 a5 Nb5 Qd8 Nd6 Qg5 Nb5 Qxh5 Nc7 Rac8 Nb5 Rfd8 Nd6 Rc3 Nb7 Rdc8 Nxa5 Rxc2 Nb7 Rc1+ Rxc1 Rxc1+ Kg2 Rc3 Nd6 Qf3+ Qxf3 Rxf3 Kxf3 f6 a5 fxe5 a6 b3 a7 b2 a8=Q+ Kh7 Qf8 b1=Q Qe7 Qf5+ Nxf5 exf5 Qxe5 f4 Qf5+ g6 Qxf4 g5",
    analysis: [
      { eval: 3 },
      { eval: 27 },
      { eval: 29 },
      { eval: 42 },
      { eval: 27 },
      { eval: 35 },
      { eval: 7 },
      { eval: 27 },
      { eval: 0 },
      { eval: 6 },
      { eval: 3 },
      { eval: 3 },
      { eval: 2 },
      { eval: 12 },
      { eval: 9 },
      { eval: 13 },
      { eval: -27 },
      { eval: -5 },
      { eval: -25 },
      { eval: -20 },
      { eval: -66 },
      { eval: -17 },
      { eval: -65 },
      { eval: -48 },
      {
        eval: -147,
        best: "c3b5",
        variation: "Nb5 Qb6 Nbd4 Rac8 Nxc6 bxc6 Qb3 Qc7 Qa3 Rfd8 Rad1 c5 c3 a5",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nb5."
        }
      },
      {
        eval: -69,
        best: "f7f6",
        variation:
          "f6 exf6 Qxf6 Qf1 Rad8 Rad1 Nf4 Ne2 Nxg2 Qxg2 Qxf3 Qxf3 Rxf3 Nd4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was f6."
        }
      },
      {
        eval: -134,
        best: "c3a2",
        variation: "Na2",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Na2."
        }
      },
      { eval: -92 },
      { eval: -115 },
      {
        eval: -50,
        best: "f7f6",
        variation: "f6 exf6 Rxf6 Qe3 Raf8 Ne2 e5 Qb3 Rd8 Rad1 Na5 Qb4 h6 h3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was f6."
        }
      },
      {
        eval: -121,
        best: "e2e3",
        variation:
          "Qe3 Ng6 Na4 Nce7 Rac1 Nf5 Qb6 Rfc8 Qxc7 Rxc7 b4 Rc6 c3 Rac8",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Qe3."
        }
      },
      { eval: -142 },
      { eval: -126 },
      {
        eval: -64,
        best: "f7f6",
        variation: "f6 exf6 Rxf6 Qe3 Raf8 Ne2 e5 Qb3 Rd8 Rad1 Na5 Qb4 Rc6 Rc1",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was f6."
        }
      },
      { eval: -44 },
      { eval: -17 },
      { eval: -17 },
      { eval: -8 },
      {
        eval: -251,
        best: "b4d3",
        variation: "Nd3 Rfc8 g3 Na5 Rac1 Nc6 c3 Nge7 Kg2 a5 b4 axb4 axb4 Ra3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nd3." }
      },
      { eval: -248 },
      { eval: -262 },
      { eval: -260 },
      { eval: -295 },
      {
        eval: -182,
        best: "f8c8",
        variation: "Rfc8 h4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Rfc8." }
      },
      {
        eval: -285,
        best: "e2d2",
        variation:
          "Qd2 Ne4 Qe3 Nc5 Qc3 Qb6 Qa5 Qxa5 Nxa5 Rfc8 Nac6 Na4 Re3 Rc7",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Qd2." }
      },
      {
        eval: -212,
        best: "a8c8",
        variation: "Rac8",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Rac8."
        }
      },
      {
        eval: -365,
        best: "f2f3",
        variation: "f3 Nd2 h4 Nc4 a4 bxa4 h5 Ncxe5 Nxe5 Nxe5 Qf4 f6 Rxa4 Rf7",
        judgment: { name: "Mistake", comment: "Mistake. Best move was f3." }
      },
      {
        eval: -255,
        best: "g6e5",
        variation: "Nxe5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nxe5." }
      },
      {
        eval: -408,
        best: "f2f3",
        variation:
          "f3 Qb6 Rad1 h5 Qxh5 Nxg3 Qg4 Nf5 h5 Ngh4 Ne7+ Nxe7 Qxh4 Nf5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was f3." }
      },
      {
        eval: -308,
        best: "g6e5",
        variation: "Nxe5 Qf4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nxe5." }
      },
      { eval: -309 },
      { eval: -299 },
      {
        eval: -377,
        best: "f2f3",
        variation:
          "f3 Nc3 Qh4 Qxh4 gxh4 Rfc8 Kf2 Rc4 Ke3 Rac8 Rg1 Na4 Rgb1 Rc3+",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was f3."
        }
      },
      { eval: -362 },
      { eval: -359 },
      {
        eval: -283,
        best: "e4c3",
        variation: "Nc3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nc3."
        }
      },
      {
        mate: -2,
        best: "g1g2",
        variation: "Kg2 Rfc8 f3 Ng5 Rb1 Qb6 Re3 Rc4 c3 Rac8 a5 Qxa5 cxb4 Qa2+",
        judgment: {
          name: "Blunder",
          comment: "Checkmate is now unavoidable. Best move was Kg2."
        }
      },
      {
        eval: -360,
        best: "c5f2",
        variation: "Qxf2+ Kh1 Nxg3#",
        judgment: {
          name: "Blunder",
          comment: "Lost forced checkmate sequence. Best move was Qxf2+."
        }
      },
      {
        eval: -473,
        best: "a1c1",
        variation: "Rc1 Rfc8",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Rc1." }
      },
      {
        eval: -339,
        best: "f8c8",
        variation:
          "Rfc8 Nb3 Qxe5 Nd2 Rc3 Nxe4 dxe4 Kg2 Rac8 Rb1 Rxc2 Rxb4 e3 Re2",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Rfc8." }
      },
      { eval: -370 },
      {
        eval: -286,
        best: "a8c8",
        variation: "Rac8",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Rac8."
        }
      },
      {
        eval: -520,
        best: "g4f4",
        variation: "Qf4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Qf4." }
      },
      { eval: -515 },
      { eval: -499 },
      {
        eval: -400,
        best: "a8c8",
        variation: "Rac8 a5 Rfd8 Re1 Qc3 Nf3 Rc4 Qb7 Qxc2 Qxa6 Rc3 Qb7 Rd5 Nh2",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Rac8."
        }
      },
      { eval: -369 },
      { eval: -339 },
      { eval: -318 },
      { eval: -323 },
      {
        eval: -474,
        best: "e4e2",
        variation: "Qe2",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Qe2." }
      },
      { eval: -456 },
      {
        eval: -659,
        best: "c2c4",
        variation: "c4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was c4." }
      },
      { eval: -657 },
      { eval: -651 },
      { eval: -646 },
      { eval: -632 },
      { eval: -597 },
      {
        eval: -1296,
        best: "a1b1",
        variation: "Rb1 f6",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Rb1." }
      },
      {
        eval: -719,
        best: "d8d1",
        variation:
          "Rd1+ Rxd1 Qxd1+ Kg2 Rxc2 Nd6 Rc1 g4 Qh1+ Kg3 Rg1+ Kf4 Qh3 Qa8+",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Rd1+." }
      },
      { eval: -761 },
      { eval: -735 },
      {
        eval: -1536,
        best: "a1e1",
        variation: "Re1 Rc1 Nb3 Rxe1+ Qxe1 Rc3 Nc1 Ra3 a5 b3 Qd2 Qxe5 Qd8+ Kh7",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Re1." }
      },
      { eval: -1403 },
      {
        mate: -3,
        best: "e4e1",
        variation: "Qe1 Rxe1+ Rxe1 Rc2 Nd6 Qf3 Rf1 Qe2 a5 Qxe5 Rd1 Qe2 Rf1 Qd3",
        judgment: {
          name: "Inaccuracy",
          comment: "Checkmate is now unavoidable. Best move was Qe1."
        }
      },
      { mate: -2 },
      { mate: -1 },
      {
        eval: -1283,
        best: "h5h1",
        variation: "Qh1#",
        judgment: {
          name: "Inaccuracy",
          comment: "Lost forced checkmate sequence. Best move was Qh1#."
        }
      },
      { eval: -1278 },
      {
        eval: 1625,
        best: "c3c1",
        variation: "Rc1",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Rc1." }
      },
      { eval: 1482 },
      { eval: 1596 },
      { eval: 1541 },
      { eval: 1661 },
      { eval: 1546 },
      {
        mate: 11,
        best: "b4b3",
        variation: "b3 Nc4",
        judgment: {
          name: "Inaccuracy",
          comment: "Checkmate is now unavoidable. Best move was b3."
        }
      },
      { mate: 10 },
      { mate: 10 },
      { mate: 9 },
      { mate: 9 },
      { mate: 8 },
      { mate: 8 },
      {
        eval: 210,
        best: "a8b7",
        variation: "Qb7 e4+ Kxe4 Kg6 Qxb2 h5 Qb7 Kh6 Ne8 g6 Qe7 e5 Kxe5 h4",
        judgment: {
          name: "Blunder",
          comment: "Lost forced checkmate sequence. Best move was Qb7."
        }
      },
      { eval: 192 },
      { eval: 148 },
      {
        mate: 10,
        best: "b1d3",
        variation:
          "Qd3+ Kg2 e4 Qxe6 Qf3+ Kg1 e3 fxe3 Qxg3+ Kf1 Qf3+ Ke1 h5 Qe7",
        judgment: {
          name: "Blunder",
          comment: "Checkmate is now unavoidable. Best move was Qd3+."
        }
      },
      { mate: 9 },
      { mate: 9 },
      { mate: 8 },
      { mate: 7 },
      { mate: 6 },
      { mate: 5 },
      {
        mate: 6,
        best: "f5f7",
        variation: "Qf7+ Kh8 Kxf4 h5 Kg5 h4 Kxg6 hxg3 Qg7#",
        judgment: {
          name: "Inaccuracy",
          comment: "Not the best checkmate sequence. Best move was Qf7+."
        }
      },
      { mate: 5 }
    ],
    clock: { initial: 300, increment: 0, totalTime: 300 }
  },
  {
    id: "vjldoK5a",
    rated: false,
    variant: "standard",
    speed: "blitz",
    perf: "blitz",
    createdAt: 1527335481540,
    lastMoveAt: 1527335823412,
    status: "mate",
    players: {
      white: {
        user: { id: "tailuge", name: "tailuge" },
        rating: 1611,
        analysis: { inaccuracy: 6, mistake: 3, blunder: 1, acpl: 59 }
      },
      black: {
        user: { id: "kalyanthrone", name: "kalyanthrone" },
        rating: 1871,
        analysis: { inaccuracy: 4, mistake: 3, blunder: 3, acpl: 101 }
      }
    },
    winner: "white",
    opening: { eco: "C30", name: "King's Gambit", ply: 3 },
    moves:
      "e4 e5 f4 d6 Nf3 Nc6 Bc4 Bg4 O-O Nf6 d3 a6 a3 Be7 Be3 O-O Qe1 d5 Ba2 dxe4 dxe4 exf4 Bxf4 Re8 Ng5 Bh5 Nc3 h6 Nh3 Qc8 Qg3 Bg6 e5 Nh5 Qxg6 Nxf4 Nxf4 Rf8 Nh5 Bf6 exf6 Qg4 Qxg4 g6 Qxg6+ Kh8 Qg7#",
    analysis: [
      { eval: 3 },
      { eval: 24 },
      {
        eval: -61,
        best: "g1f3",
        variation: "Nf3 Nc6 Bb5 Nf6 d3 d6 c3 a6 Ba4 h6",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nf3."
        }
      },
      {
        eval: 15,
        best: "e5f4",
        variation: "exf4 Nf3 d6 d4 g5 h4 g4 Ng1 Bh6 Nc3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was exf4."
        }
      },
      { eval: -23 },
      { eval: 14 },
      { eval: -1 },
      { eval: 28 },
      {
        eval: -66,
        best: "d2d3",
        variation: "d3 Nd4 Be3 Bxf3 gxf3 Qh4+ Kd2 Qh3 Rf1 O-O-O",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was d3."
        }
      },
      {
        eval: 35,
        best: "e5f4",
        variation: "exf4 d4 g5 c3 Qe7 b4 Bg7 a4 Bxf3 gxf3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was exf4." }
      },
      { eval: 30 },
      { eval: 77 },
      { eval: 40 },
      { eval: 76 },
      {
        eval: -37,
        best: "h2h3",
        variation: "h3 Bxf3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was h3." }
      },
      { eval: 10 },
      {
        eval: -86,
        best: "h2h3",
        variation: "h3 exf4 Bxf4 Be6 Bxe6 fxe6 Bh2 Qe8 Nbd2 Nh5 c3 Qg6 d4 Nf4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was h3."
        }
      },
      {
        eval: 55,
        best: "e5f4",
        variation: "exf4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was exf4." }
      },
      {
        eval: -82,
        best: "e4d5",
        variation:
          "exd5 exf4 dxc6 fxe3 cxb7 Rb8 Qxe3 Bxf3 Qxf3 Qd4+ Kh1 Qxb2 Nd2 Qxb7",
        judgment: { name: "Mistake", comment: "Mistake. Best move was exd5." }
      },
      { eval: -51 },
      { eval: -73 },
      { eval: -73 },
      { eval: -45 },
      {
        eval: 45,
        best: "g4f3",
        variation:
          "Bxf3 gxf3 Bc5+ Kh1 Nh5 Be3 Bxe3 Qxe3 Nd4 Qf2 Ne6 Nc3 c6 Rad1",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Bxf3."
        }
      },
      {
        eval: -6,
        best: "b1c3",
        variation: "Nc3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nc3."
        }
      },
      { eval: 20 },
      { eval: 14 },
      { eval: 38 },
      {
        eval: -23,
        best: "g5f3",
        variation:
          "Nf3 Bd6 Rd1 Qb8 Bxd6 cxd6 Qe3 Qa7 Qxa7 Rxa7 Rxd6 Nxe4 Nxe4 Rxe4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nf3."
        }
      },
      {
        eval: 155,
        best: "e7c5",
        variation: "Bc5+ Kh1",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Bc5+." }
      },
      {
        eval: -8,
        best: "f4e3",
        variation: "Be3 Bg4 Nf4 Bd6 h3 Be6 Nxe6 Rxe6 Rd1 a5 Bxe6 Qxe6 Bf4 Bxf4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Be3." }
      },
      {
        eval: 648,
        best: "c8g4",
        variation:
          "Qg4 Nd5 Rac8 Qxg4 Nxg4 Nxe7+ Rxe7 Rae1 Rce8 Bg3 g5 Nf2 Nf6 e5",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Qg4." }
      },
      {
        eval: 238,
        best: "g3g6",
        variation:
          "Qxg6 Bc5+ Kh1 Re6 Qg3 Bd4 Bxe6 Qxe6 Bxh6 Nh5 Qf3 Nf6 Nf4 Qg4",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Qxg6." }
      },
      {
        eval: 690,
        best: "f6g4",
        variation: "Ng4 e6",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Ng4." }
      },
      { eval: 685 },
      { eval: 677 },
      { eval: 667 },
      {
        eval: 1912,
        best: "c6e5",
        variation:
          "Nxe5 Bxf7+ Kh8 Qh5 Bg5 Bxe8 Qxe8 Qxe8+ Rxe8 Ncd5 c6 Rae1 Kh7 Nd3",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Nxe5." }
      },
      { eval: 1831 },
      {
        mate: 2,
        best: "c8g4",
        variation:
          "Qg4 Qxg4 Bg5 e6 fxe6 Rxf8+ Rxf8 Qxe6+ Kh8 Bd5 Ne7 Qe5 Bf6 Nxf6",
        judgment: {
          name: "Inaccuracy",
          comment: "Checkmate is now unavoidable. Best move was Qg4."
        }
      },
      {
        eval: 2411,
        best: "h5f6",
        variation: "Nxf6+ Kh8 Qh7#",
        judgment: {
          name: "Inaccuracy",
          comment: "Lost forced checkmate sequence. Best move was Nxf6+."
        }
      },
      { eval: 2352 },
      { eval: 2288 },
      {
        mate: 2,
        best: "g7g5",
        variation: "g5 Qd7",
        judgment: {
          name: "Inaccuracy",
          comment: "Checkmate is now unavoidable. Best move was g5."
        }
      },
      { mate: 1 },
      { mate: 1 }
    ],
    clock: { initial: 300, increment: 0, totalTime: 300 }
  },
  {
    id: "gcrMLiyg",
    rated: false,
    variant: "standard",
    speed: "blitz",
    perf: "blitz",
    createdAt: 1527318544074,
    lastMoveAt: 1527319015134,
    status: "resign",
    players: {
      white: {
        user: { id: "lemonia", name: "lemonia" },
        rating: 1702,
        analysis: { inaccuracy: 4, mistake: 5, blunder: 4, acpl: 68 }
      },
      black: {
        user: { id: "tailuge", name: "tailuge" },
        rating: 1611,
        analysis: { inaccuracy: 4, mistake: 11, blunder: 2, acpl: 71 }
      }
    },
    winner: "white",
    opening: { eco: "D10", name: "Slav Defense: Exchange Variation", ply: 5 },
    moves:
      "d4 c6 c4 d5 cxd5 cxd5 Nf3 Bf5 Nc3 e6 Qb3 Qb6 Qxb6 axb6 Nb5 Na6 Bf4 Nf6 Be5 Ne4 e3 Bb4+ Kd1 Bf8 Nd2 Nxd2 Kxd2 Bb4+ Nc3 O-O Rc1 Rac8 Bd3 Bxd3 Kxd3 Be7 Na4 Rxc1 Rxc1 Nb4+ Ke2 Nxa2 Rc7 b5 Nb6 Bd8 Rxb7 Bxb6 Rxb6 Rc8 Rxb5 Rc2+ Kf3 Rc8 Rb8 Rxb8 Bxb8 f6 Ke2 f5 Bd6 g6 b4 Nc3+ Kd3 Nb5 Bc5 Kf7 f3 h5 e4 fxe4+ fxe4 dxe4+ Kxe4 Kf6 g3 g5 h3 g4 hxg4 hxg4 Bb6 e5 d5 Nc3+ Kd3 Nxd5 Bc5 Nc7 Bb6 Nb5 Bd8+ Ke6 Bg5 Kd5 Be3 Nd6 Bc5 e4+ Ke3 Nb5 Kf4 Nc3 Kxg4",
    analysis: [
      { eval: 8 },
      { eval: 21 },
      { eval: 15 },
      { eval: 47 },
      { eval: 34 },
      { eval: 23 },
      { eval: 7 },
      { eval: 56 },
      { eval: 52 },
      { eval: 44 },
      { eval: 32 },
      { eval: 48 },
      { eval: 40 },
      { eval: 55 },
      { eval: 44 },
      { eval: 64 },
      { eval: 62 },
      { eval: 67 },
      {
        eval: -112,
        best: "a2a3",
        variation: "a3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was a3." }
      },
      { eval: -66 },
      {
        eval: -157,
        best: "a2a3",
        variation: "a3 Rc8 g4 Bxg4 Nd2 Nxd2 Kxd2 Bf5 Rc1 Rxc1 Kxc1 f6 Bg3 Kf7",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was a3."
        }
      },
      { eval: -150 },
      {
        eval: -553,
        best: "e1e2",
        variation:
          "Ke2 Rc8 Ne1 Bxe1 Kxe1 Nb4 Rd1 Rc2 Nd6+ Ke7 Nxe4 dxe4 a3 Nd3+",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Ke2." }
      },
      {
        eval: 15,
        best: "e4f2",
        variation: "Nxf2+",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Nxf2+." }
      },
      {
        eval: -599,
        best: "e5g3",
        variation: "Bg3 h6 Rc1 Be7 a3 O-O Nc3 Nd6 Ne5 Rfd8 Bd3 Rac8 Ke2 Nb8",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Bg3." }
      },
      {
        eval: 42,
        best: "e4f2",
        variation:
          "Nxf2+ Ke1 Nxh1 Nd6+ Bxd6 Bxd6 f6 Ba3 Rc8 Bb5+ Kf7 Ke2 Bg4+ Ke1",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Nxf2+." }
      },
      { eval: 58 },
      { eval: 49 },
      { eval: 48 },
      { eval: 54 },
      { eval: 50 },
      { eval: 73 },
      { eval: 73 },
      { eval: 83 },
      { eval: 78 },
      { eval: 76 },
      {
        eval: -28,
        best: "a2a3",
        variation: "a3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was a3." }
      },
      {
        eval: 26,
        best: "a6b4",
        variation: "Nb4+ Kd2",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nb4+."
        }
      },
      { eval: 38 },
      { eval: 48 },
      { eval: 22 },
      {
        eval: 129,
        best: "f7f6",
        variation: "f6 Bg3 Ra8 Rc7 Rxa4 Rxe7 Rxa2 Kf3 Rxb2 Rxe6 b5 Rb6 Na2 Kg4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was f6." }
      },
      { eval: 117 },
      {
        eval: 175,
        best: "f7f6",
        variation:
          "f6 Rxe7 fxe5 Rxe6 b5 Nc5 exd4 exd4 Nb4 Rd6 Rf4 Rd8+ Kf7 Rd7+",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was f6."
        }
      },
      {
        eval: 92,
        best: "a4c5",
        variation: "Nc5 Re8",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nc5."
        }
      },
      {
        eval: 167,
        best: "e7b4",
        variation: "Bb4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Bb4."
        }
      },
      { eval: 145 },
      { eval: 191 },
      { eval: 182 },
      { eval: 205 },
      { eval: 215 },
      {
        eval: 402,
        best: "f7f6",
        variation: "f6 Rb8 Rxb8 Bxb8 Nb4 Bd6 Nc6 Bc5 Kf7 b4 Ke8 b5 Na5 Kd2",
        judgment: { name: "Mistake", comment: "Mistake. Best move was f6." }
      },
      {
        eval: 139,
        best: "e2d3",
        variation: "Kd3 Rc8 Bd6 h5 Bc5 h4 Kd2 Ra8 b4 Nxb4 Rxb4 Ra2+ Ke1 g5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Kd3." }
      },
      {
        eval: 271,
        best: "h7h5",
        variation: "h5 h3 Nc1 Rc5 Rc4 Bd6 Nb3 Rc7 Rxc7 Bxc7 Kf8 Bd6+ Ke8 Ke2",
        judgment: { name: "Mistake", comment: "Mistake. Best move was h5." }
      },
      {
        eval: 199,
        best: "e5d6",
        variation: "Bd6",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Bd6."
        }
      },
      { eval: 213 },
      { eval: 171 },
      {
        eval: 247,
        best: "g8f8",
        variation: "Kf8 Bd6+",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Kf8."
        }
      },
      { eval: 207 },
      {
        eval: 400,
        best: "a2b4",
        variation: "Nb4 Bd6 Nc6 Bc5 Kf7 b4 Ke8 b5 Na5 Kd3 g6 Kc3 Kd7 Kb4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nb4." }
      },
      { eval: 310 },
      {
        eval: 522,
        best: "a2c1",
        variation: "Nc1+ Kd2 Nb3+ Kc3 Na5 Be5 Kf7 b4 Nc4 b5 g6 Kb4 Ke7 Kc5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nc1+." }
      },
      {
        eval: 181,
        best: "e2d2",
        variation: "Kd2",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Kd2." }
      },
      { eval: 160 },
      { eval: 144 },
      { eval: 144 },
      { eval: 124 },
      { eval: 130 },
      { eval: 128 },
      { eval: 145 },
      { eval: 139 },
      { eval: 142 },
      { eval: 174 },
      {
        eval: 329,
        best: "f7f6",
        variation: "Kf6 h3 Kg5 Ke3 Kf6 Kf3 g5 e5+ Kg6 g4 Na3 Ba7 Nb5 Bb6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Kf6." }
      },
      { eval: 305 },
      { eval: 327 },
      { eval: 315 },
      { eval: 317 },
      { eval: 290 },
      {
        eval: 432,
        best: "b5a3",
        variation: "Na3 d5 exd5+ Kxd5 Kf5 Kc6 Ke4 Be7 Kf3 Bxg5 Kxg3 h4 Kf3 b5",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Na3." }
      },
      { eval: 412 },
      { eval: 387 },
      {
        eval: 300,
        best: "e4f4",
        variation:
          "Kf4 Nc3 Bd6 Nd5+ Kxg4 Nc3 Kf4 Nd5+ Ke4 Kf7 Ke5 Nb6 Bc5 Nc4+",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Kf4."
        }
      },
      {
        eval: 492,
        best: "b5c3",
        variation: "Nc3+ Kd3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nc3+." }
      },
      {
        eval: 8,
        best: "d4e5",
        variation: "dxe5+ Ke6 Bd4 Nc7 Ba1 Nb5 Kf4 Na3 Bc3 Nb5 Bb2 Kf7 Kf5 Nc7",
        judgment: { name: "Blunder", comment: "Blunder. Best move was dxe5+." }
      },
      { eval: 8 },
      { eval: 8 },
      { eval: 8 },
      { eval: 8 },
      {
        eval: 282,
        best: "f6e6",
        variation: "Ke6 b5 Nf6 b6 Kd7 b7 Kc7 Bd6+ Kxb7 Bxe5 Nh5 Kd4 Nxg3 Bxg3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Ke6." }
      },
      {
        eval: 8,
        best: "d3c4",
        variation: "Kc4 Ne6",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Kc4." }
      },
      {
        eval: 180,
        best: "c7e8",
        variation: "Ne8 b5 Ke6 Bc5 Kd5 b6 Kc6 b7 Kxb7 Ke4 Kc6 Bb4 Ng7 Bc3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Ne8." }
      },
      {
        eval: 0,
        best: "d3c4",
        variation: "Kc4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Kc4." }
      },
      { eval: 0 },
      { eval: 0 },
      { eval: 0 },
      { eval: 0 },
      { eval: 0 },
      { eval: -8 },
      { eval: 0 },
      { eval: 0 },
      { eval: 0 },
      { eval: 8 },
      {
        eval: 113,
        best: "b5d4",
        variation:
          "Nd4 Bb6 Kc4 Kxe4 Ne2 Bf2 Nxg3+ Bxg3 Kxb4 Kd3 Kb3 Be1 Ka2 Kc2",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nd4." }
      },
      { eval: 112 }
    ],
    clock: { initial: 300, increment: 0, totalTime: 300 }
  },
  {
    id: "sIEz7HyE",
    rated: false,
    variant: "standard",
    speed: "blitz",
    perf: "blitz",
    createdAt: 1527267893360,
    lastMoveAt: 1527268477898,
    status: "outoftime",
    players: {
      white: {
        user: { id: "zybex9", name: "Zybex9" },
        rating: 1678,
        analysis: { inaccuracy: 2, mistake: 4, blunder: 3, acpl: 107 }
      },
      black: {
        user: { id: "tailuge", name: "tailuge" },
        rating: 1611,
        analysis: { inaccuracy: 5, mistake: 2, blunder: 3, acpl: 83 }
      }
    },
    winner: "black",
    opening: { eco: "A04", name: "Zukertort Opening: Slav Invitation", ply: 2 },
    moves:
      "Nf3 c6 c4 d5 cxd5 cxd5 d4 Bf5 Nc3 e6 Bg5 Be7 h4 Bxg5 hxg5 Nc6 e3 Nge7 Bb5 Bg6 Ne5 Qc7 Nxg6 Nxg6 Qa4 a6 Bxc6+ Qxc6 Qa3 b5 Rc1 Qb6 Ne2 b4 Qa4+ Qb5 Qb3 O-O a4 Qa5 Rc5 Qb6 a5 Qb7 Nc3 Rfc8 Na4 Rxc5 Nxc5 Qb5 e4 Nf4 Qf3 e5 exd5 Qc4 Nb3 Nd3+ Kd2 Nxb2 d6 Rc8 Nc5 Qb5 Qf5 Nc4+ Ke1 Nxd6 Qxh7+ Kf8 Qh8+ Ke7 Qxc8 Nxc8",
    analysis: [
      { eval: 5 },
      { eval: 15 },
      { eval: 29 },
      { eval: 47 },
      { eval: 12 },
      { eval: 51 },
      { eval: 7 },
      { eval: 56 },
      { eval: 52 },
      { eval: 44 },
      { eval: 0 },
      { eval: 4 },
      { eval: -18 },
      {
        eval: 41,
        best: "b8d7",
        variation: "Nd7 e3",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Nd7."
        }
      },
      { eval: 42 },
      { eval: 43 },
      { eval: 33 },
      { eval: 50 },
      {
        eval: -9,
        best: "f1d3",
        variation: "Bd3 Qb6 Rb1 O-O-O a3 Kb8 b4 Bxd3 Qxd3 Ng6 Ne2 Nce7 Kf1 Rc8",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Bd3."
        }
      },
      {
        eval: 60,
        best: "e7g6",
        variation: "Ng6",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Ng6."
        }
      },
      { eval: 66 },
      { eval: 80 },
      { eval: 64 },
      { eval: 105 },
      { eval: 60 },
      { eval: 70 },
      { eval: 60 },
      { eval: 97 },
      { eval: 55 },
      { eval: 70 },
      { eval: 61 },
      { eval: 59 },
      { eval: 64 },
      { eval: 68 },
      { eval: 64 },
      { eval: 59 },
      { eval: 41 },
      { eval: 64 },
      {
        eval: -58,
        best: "c1c5",
        variation: "Rc5 Qb7 f4 a5 Kf2 a4 Qd3 Rfc8 Qc2 Qa6 Rc1 Rcb8 Rc7 b3",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Rc5." }
      },
      {
        eval: 51,
        best: "b4a3",
        variation:
          "bxa3 Qxa3 Rfc8 Kd2 Rcb8 Ke1 a5 Rc5 Qb6 Rc2 Rc8 Rd2 Rab8 Kf1",
        judgment: { name: "Mistake", comment: "Mistake. Best move was bxa3." }
      },
      { eval: 61 },
      { eval: 67 },
      { eval: 44 },
      { eval: 72 },
      {
        eval: -30,
        best: "e2f4",
        variation: "Nf4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Nf4." }
      },
      {
        eval: 55,
        best: "b7e7",
        variation: "Qe7 Na4 Qxg5 Kf1 Nh4 g3 Nf5 Nb6 Rad8 Qd1 Nd6 Kg2 Qg6 Qe2",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Qe7."
        }
      },
      { eval: 66 },
      { eval: 77 },
      { eval: 77 },
      { eval: 81 },
      {
        eval: -170,
        best: "b3a4",
        variation:
          "Qa4 Qxa4 Nxa4 e5 Kd2 f6 gxf6 exd4 fxg7 dxe3+ Kxe3 Re8+ Kd4 Re2",
        judgment: { name: "Mistake", comment: "Mistake. Best move was Qa4." }
      },
      {
        eval: -84,
        best: "d5e4",
        variation:
          "dxe4 Qh3 Kf8 Qg4 e5 Nd7+ Kg8 Nxe5 Nxe5 dxe5 Qc4 g6 fxg6 Qe2",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was dxe4."
        }
      },
      { eval: -83 },
      { eval: -75 },
      { eval: -115 },
      {
        eval: -1,
        best: "b4b3",
        variation: "b3 Kd2",
        judgment: { name: "Mistake", comment: "Mistake. Best move was b3." }
      },
      {
        eval: -339,
        best: "g2g3",
        variation: "g3 Re8 Ne4 Qc2 gxf4 exf4 O-O Qxe4 Qxe4 Rxe4 Rc1 Kf8 Rc4 f3",
        judgment: { name: "Blunder", comment: "Blunder. Best move was g3." }
      },
      {
        eval: -268,
        best: "e5d4",
        variation: "exd4 Qe4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was exd4."
        }
      },
      { eval: -251 },
      {
        eval: 77,
        best: "c4b3",
        variation:
          "Qxb3 Qxd3 Qxb2+ Qc2 Qxd4+ Ke2 Qg4+ Kf1 h6 Rh3 Rc8 Qb1 Qxg5 Re3",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Qxb3." }
      },
      { eval: 8 },
      {
        eval: 612,
        best: "a8d8",
        variation:
          "Rd8 Qh3 h5 gxh6 gxh6 Rc1 Qb5 Qg4+ Kf8 Qe2 Qxe2+ Kxe2 Rxd6 dxe5",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Rd8." }
      },
      {
        eval: -965,
        best: "h1c1",
        variation: "Rc1",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Rc1." }
      },
      {
        eval: 113,
        best: "c4d4",
        variation: "Qxd4+",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Qxd4+." }
      },
      {
        eval: 0,
        best: "d6d7",
        variation:
          "d7 Rd8 Qe4 Nc4+ Ke2 Nb6+ Kf3 Nxd7 Qxh7+ Kf8 Qh8+ Ke7 Qxg7 Qc4",
        judgment: { name: "Mistake", comment: "Mistake. Best move was d7." }
      },
      { eval: 74 },
      {
        eval: 0,
        best: "d2d1",
        variation:
          "Kd1 Nxd6 Qxh7+ Kf8 Re1 Rxc5 dxc5 Qxc5 Qd3 Ke7 Qxa6 Qd4+ Ke2 Ne4",
        judgment: {
          name: "Inaccuracy",
          comment: "Inaccuracy. Best move was Kd1."
        }
      },
      { eval: 0 },
      { eval: 0 },
      { eval: 0 },
      { eval: 0 },
      { eval: 0 },
      {
        eval: -897,
        best: "h8g7",
        variation:
          "Qxg7 Rxc5 dxc5 Qxc5 Qf6+ Kd7 Qf3 Qxa5 Qb3 Qa1+ Qd1 Qc3+ Ke2 Qc4+",
        judgment: { name: "Blunder", comment: "Blunder. Best move was Qxg7." }
      },
      { eval: -830 }
    ],
    clock: { initial: 300, increment: 0, totalTime: 300 }
  }
]

const player = "tailuge"

describe("Analysis", () => {
  it("Should process example data without exception", done => {
    games.forEach(x => {
      new Analysis(x).puzzles(player)
    })
    done()
  })
})
