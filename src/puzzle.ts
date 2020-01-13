import { Chess } from "chess.js"
import { Chessground } from "chessground"
import { Color } from "chessground/types"
import { toDests, toColor } from "./util"
import { h, init } from "snabbdom"
import { VNode } from "snabbdom/vnode"
import klass from "snabbdom/modules/class"
import attributes from "snabbdom/modules/attributes"
import props from "snabbdom/modules/props"
import listeners from "snabbdom/modules/eventlisteners"
import { Evaluate } from "./evaluate"
import { build } from "search-params"

export class Puzzle {
  patch = init([klass, props, attributes, listeners])

  readonly analysis
  public readonly chess
  private readonly config
  private readonly turn
  public readonly evaluate: Evaluate
  private cg
  vnode: VNode

  constructor(analysis, evaluate: Evaluate) {
    this.analysis = analysis
    this.chess = new Chess(this.analysis.fen)
    this.turn = this.chess.turn()
    this.evaluate = evaluate
    this.config = this.initialiseConfig()
  }

  initialiseConfig() {
    let color: Color = toColor(this.chess)
    return {
      orientation: color,
      turnColor: color,
      fen: this.analysis.fen,
      movable: {
        color: color,
        free: false,
        dests: toDests(this.chess)
      }
    }
  }

  render() {
    return h(
      "section.blue.merida",
      {
        hook: {
          insert: vnode => {
            this.vnode = vnode
          }
        }
      },
      [
        h("div.cg-board-wrap", {
          hook: {
            insert: this.runUnit
          }
        }),
        h("p", [
          h(
            "a",
            {
              props: {
                href: this.url(this.chess.fen()),
                target: "_blank"
              }
            },
            this.analysis.judgment.name
          ),
          h(
            "a",
            {
              props: {
                href: this.lichessUrl(this.chess.fen()),
                target: "_blank"
              }
            },
            "🔎"
          )
        ])
      ]
    )
  }

  redraw() {
    this.vnode = this.patch(this.vnode, this.render())
  }

  runUnit = (vnode: VNode) => {
    const el = vnode.elm as HTMLElement
    el.className = "cg-board-wrap"
    this.run(el)
  }

  run(el) {
    const cg = Chessground(el, this.config)
    this.cg = cg
    this.originalMove(cg)
    cg.set({
      movable: {
        events: {
          after: (orig, dest) => {
            this.moveAndResult(orig, dest)
          }
        }
      },
      events: {
        select: ({}) => {
          this.originalMove(cg)
        }
      }
    })

    return cg
  }

  originalMove(cg) {
    cg.set({
      drawable: {
        shapes: [this.arrow(this.analysis.move, "red")]
      }
    })
  }

  moveAndResult(orig, dest) {
    this.chess.move({ from: orig, to: dest, promotion: "q" })
    this.analysis.played = this.chess
      .history({ verbose: true })
      .slice(-1)
      .pop()

    this.cg.set({
      fen: this.chess.fen()
    })

    this.setShapes([
      this.arrow(this.analysis.played, "yellow"),
      this.arrow(this.analysis.move, "red")
    ])
    this.analysis.judgment.name = this.formatReport()
    this.redraw()
    this.triggerEvaluations(this)
  }

  setShapes(shapes) {
    this.cg.set({
      turnColor: toColor(this.chess),
      movable: {
        color: toColor(this.chess),
        dests: toDests(this.chess)
      },
      drawable: {
        shapes: shapes
      }
    })
  }

  updateAnalysisBefore(x) {
    this.analysis.evalBefore = this.format(
      x.score * (this.turn == "b" ? -1 : 1)
    )
    this.analysis.bestMove = {
      from: x.bestMove.substring(0, 2),
      to: x.bestMove.substring(2, 4)
    }
    this.setShapes([
      this.arrow(this.analysis.played, "yellow"),
      this.arrow(this.analysis.move, "red")
    ])
    this.analysis.judgment.name = this.formatReport()
    this.redraw()
    console.log(this.analysis.bestMove)
  }

  updateAnalysisAfter(x) {
    console.log(JSON.stringify(x))
    this.analysis.evalAfter = this.format(x.score * (this.turn == "w" ? -1 : 1))
    this.analysis.judgment.name = this.formatReport()

    this.setShapes([
      this.arrow(this.analysis.played, "yellow"),
      this.arrow(this.analysis.move, "red"),
      this.arrow(this.analysis.bestMove, "green")
    ])

    this.redraw()
  }

  format(n: number): string {
    return n.toFixed(2)
  }

  formatReport() {
    return (this.analysis.judgment.name = `${this.analysis.move.san} (${this.analysis.evalBefore}) --> ${this.analysis.played.san} (${this.analysis.evalAfter})`)
  }

  triggerEvaluations(puzzle) {
    puzzle.evaluate.analyse(
      puzzle,
      x => puzzle.updateAnalysisBefore(x),
      x => puzzle.updateAnalysisAfter(x)
    )
  }

  arrow(move, colour) {
    return { orig: move.from, dest: move.to, brush: colour }
  }

  url(fen) {
    return "./index.html?" + build({ fen: fen })
  }

  lichessUrl(fen) {
    return `https://lichess.org/analysis/standard/${fen}`
  }
}
