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

export class Puzzle {
  patch = init([klass, props, attributes, listeners])

  readonly analysis
  public readonly chess
  private readonly config
  public readonly evaluate: Evaluate
  vnode: VNode

  constructor(analysis, evaluate: Evaluate) {
    this.analysis = analysis
    this.chess = new Chess(this.analysis.fen)
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
        h(
          "p",
          h(
            "a",
            {
              props: {
                href: this.url(this.analysis),
                target: "_blank"
              }
            },
            this.analysis.judgment.name
          )
        )
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
    this.originalMove(cg)
    cg.set({
      movable: {
        events: {
          after: (orig, dest) => {
            this.moveAndResult(cg, orig, dest)
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

  moveAndResult(cg, orig, dest) {
    this.chess.move({ from: orig, to: dest })
    this.analysis.played = this.chess
      .history({ verbose: true })
      .slice(-1)
      .pop().san
    cg.set({
      turnColor: toColor(this.chess),
      movable: {
        color: toColor(this.chess),
        dests: toDests(this.chess)
      },
      drawable: {
        shapes: [
          { orig: orig, dest: dest, brush: "yellow" },
          this.arrow(this.analysis.move, "red")
        ]
      }
    })

    this.analysis.judgment.name = `${this.analysis.move.san} ... `
    this.redraw()
    this.triggerEvaluations(this)
  }

  updateAnalysisBefore(x) {
    console.log("update", x)
    this.analysis.evalBefore = this.format(x.score)
    this.analysis.judgment.name = `${this.analysis.move.san} (${this.analysis.evalBefore}) --> ${this.analysis.played} ... `
    this.redraw()
  }

  updateAnalysisAfter(x) {
    console.log("update", x)
    this.analysis.evalAfter = this.format(x.score)
    this.analysis.judgment.name = `${this.analysis.move.san} (${this.analysis.evalBefore}) --> ${this.analysis.played} (${this.analysis.evalAfter})`
    this.redraw()
  }

  format(n: number): string {
    return n.toFixed(2)
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

  url(analysis) {
    return `https://lichess.org/${analysis.id}`
  }
}
