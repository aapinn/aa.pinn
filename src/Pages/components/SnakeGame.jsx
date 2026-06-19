import { useState, useEffect, useRef, useCallback } from "react"
import { trackGamePlayed } from "../../context/BadgeContext"

const GRID_SIZE = 20
const CELL_SIZE = 16
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
]

function randomFood(snake) {
  let pos
  do {
    pos = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
  } while (snake.some((s) => s.x === pos.x && s.y === pos.y))
  return pos
}

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE)
  const [food, setFood] = useState(() => randomFood(INITIAL_SNAKE))
  const [direction, setDirection] = useState({ x: 1, y: 0 })
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(() => {
    try { return parseInt(localStorage.getItem('snake-highscore') || '0') } catch { return 0 }
  })
  const [started, setStarted] = useState(false)
  const directionRef = useRef(direction)
  const snakeRef = useRef(snake)

  useEffect(() => {
    directionRef.current = direction
  }, [direction])

  useEffect(() => {
    snakeRef.current = snake
  }, [snake])

  const gameLoop = useCallback(() => {
    if (gameOver) return

    setSnake((prev) => {
      const head = prev[0]
      const dir = directionRef.current
      const newHead = { x: head.x + dir.x, y: head.y + dir.y }

      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        setGameOver(true)
        return prev
      }

      if (prev.some((s) => s.x === newHead.x && s.y === newHead.y)) {
        setGameOver(true)
        return prev
      }

      const ate = newHead.x === food.x && newHead.y === food.y
      const newSnake = [newHead, ...prev]

      if (ate) {
        setFood(randomFood(newSnake))
        setScore((s) => {
          const ns = s + 1
          if (ns > (parseInt(localStorage.getItem('snake-highscore') || '0'))) {
            localStorage.setItem('snake-highscore', ns)
            setHighScore(ns)
          }
          return ns
        })
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [gameOver, food])

  useEffect(() => {
    if (!started || gameOver) return
    const interval = setInterval(gameLoop, 130)
    return () => clearInterval(interval)
  }, [started, gameOver, gameLoop])

  useEffect(() => {
    const handler = (e) => {
      if (gameOver) return
      const dir = directionRef.current
      switch (e.key) {
        case 'ArrowUp': if (dir.y === 0) { setDirection({ x: 0, y: -1 }); setStarted(true) }; break
        case 'ArrowDown': if (dir.y === 0) { setDirection({ x: 0, y: 1 }); setStarted(true) }; break
        case 'ArrowLeft': if (dir.x === 0) { setDirection({ x: -1, y: 0 }); setStarted(true) }; break
        case 'ArrowRight': if (dir.x === 0) { setDirection({ x: 1, y: 0 }); setStarted(true) }; break
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [gameOver])

  const restart = () => {
    trackGamePlayed('snake')
    setSnake(INITIAL_SNAKE)
    setFood(randomFood(INITIAL_SNAKE))
    setDirection({ x: 1, y: 0 })
    setGameOver(false)
    setScore(0)
    setStarted(false)
  }

  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/40 dark:bg-neutral-900/40">
      <div className="flex items-center justify-between w-full">
        <div className="text-xs text-neutral-600 dark:text-neutral-400">
          Score: <span className="font-semibold text-neutral-800 dark:text-neutral-200">{score}</span>
        </div>
        <div className="text-xs text-neutral-600 dark:text-neutral-400">
          Best: <span className="font-semibold text-purple-500">{highScore}</span>
        </div>
      </div>

      <div
        className="relative bg-neutral-900 rounded-lg overflow-hidden"
        style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
      >
        {/* Snake */}
        {snake.map((seg, i) => (
          <div
            key={`${seg.x}-${seg.y}-${i}`}
            className="absolute rounded-sm"
            style={{
              left: seg.x * CELL_SIZE,
              top: seg.y * CELL_SIZE,
              width: CELL_SIZE - 1,
              height: CELL_SIZE - 1,
              backgroundColor: i === 0 ? '#22c55e' : '#16a34a',
            }}
          />
        ))}

        {/* Food */}
        <div
          className="absolute rounded-full animate-pulse"
          style={{
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            width: CELL_SIZE - 1,
            height: CELL_SIZE - 1,
            backgroundColor: '#ef4444',
          }}
        />

        {/* Overlay */}
        {!started && !gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <p className="text-white text-xs">Tekan arrow untuk mulai</p>
          </div>
        )}
        {gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 gap-2">
            <p className="text-white text-sm font-semibold">Game Over!</p>
            <button
              onClick={restart}
              className="text-xs px-3 py-1.5 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors"
            >
              Main Lagi
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        {[
          { label: '▲', dir: { x: 0, y: -1 } },
          { label: '◄', dir: { x: -1, y: 0 } },
          { label: '▼', dir: { x: 0, y: 1 } },
          { label: '►', dir: { x: 1, y: 0 } },
        ].map((btn) => (
          <button
            key={btn.label}
            onTouchStart={() => { setDirection(btn.dir); setStarted(true) }}
            onClick={() => { setDirection(btn.dir); setStarted(true) }}
            className="w-9 h-9 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  )
}
