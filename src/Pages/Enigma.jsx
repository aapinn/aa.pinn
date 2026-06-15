import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { TbPuzzle, TbCheck, TbX, TbBulb, TbSend } from 'react-icons/tb'
import { clues, checkAnswer } from '../data/enigmaData'

const ClueCard = ({ clue, index, onAnswer, status, revealedHint }) => {
  const [input, setInput] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    if (!input.trim()) return
    const correct = checkAnswer(clue.id, input)
    onAnswer(clue.id, correct)
    setChecked(true)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCheck()
  }

  const statusIcon = status === null ? null : status ? (
    <TbCheck className="text-green-500 text-xl" />
  ) : (
    <TbX className="text-red-500 text-xl" />
  )

  const statusColor = status === null
    ? 'border-neutral-200 dark:border-neutral-700'
    : status
      ? 'border-green-400 dark:border-green-600 bg-green-50/30 dark:bg-green-900/10'
      : 'border-red-400 dark:border-red-600 bg-red-50/30 dark:bg-red-900/10'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`p-5 rounded-2xl border ${statusColor} bg-white/40 dark:bg-neutral-900/40 backdrop-blur-sm transition-all duration-300`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">{clue.category}</span>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
            {clue.categoryName}
          </span>
          <span className="text-[10px] text-neutral-400">Clue #{clue.id}</span>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {statusIcon}
        </div>
      </div>

      <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3 leading-relaxed">
        {clue.question}
      </p>

      <div className="flex items-center gap-2 mb-2">
        <input
          type="text"
          value={input}
          onChange={(e) => { setInput(e.target.value); setChecked(false) }}
          onKeyDown={handleKeyDown}
          disabled={status === true}
          placeholder="Enter your answer..."
          className="flex-1 p-2.5 text-sm border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 outline-none duration-300 disabled:opacity-50"
        />
        <motion.button
          onClick={handleCheck}
          disabled={status === true || !input.trim()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/20 duration-300 disabled:opacity-40 shrink-0"
        >
          Check
        </motion.button>
      </div>

      <div className="flex items-center gap-3 text-xs">
        <button
          onClick={() => setShowHint(!showHint)}
          className={`flex items-center gap-1 text-neutral-500 hover:text-purple-500 duration-300 ${revealedHint ? 'text-purple-500' : ''}`}
        >
          <TbBulb className={`${showHint || revealedHint ? 'text-yellow-500' : ''}`} />
          {showHint ? 'Hide' : 'Hint'}
        </button>
        <span className="text-neutral-400">{clue.location}</span>
      </div>

      {showHint && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-2 p-2 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-xs text-neutral-600 dark:text-neutral-400"
        >
          {clue.hint}
        </motion.p>
      )}
    </motion.div>
  )
}

const Enigma = () => {
  const [answers, setAnswers] = useState({})

  const handleAnswer = (clueId, correct) => {
    setAnswers(prev => ({ ...prev, [clueId]: correct }))
  }

  const revealedClues = Object.keys(answers).length
  const correctCount = Object.values(answers).filter(Boolean).length
  const total = clues.length
  const allAnswered = revealedClues === total

  return (
    <div data-aos="fade-down" data-aos-duration="1000">
      <Helmet>
        <title>Pinnacle Enigma - Arif Rahman Hidayat</title>
        <meta name="description" content="Pinnacle Enigma - Treasure hunt with 7 hidden clues. Solve all of them and prove your sharpness!" />
        <meta property="og:title" content="Pinnacle Enigma - Arif Rahman Hidayat" />
        <meta property="og:description" content="Find 7 hidden clues across the website. Solve puzzles in math, observation, riddles, and logic." />
        <meta property="og:url" content="https://aapinn.vercel.app/enigma" />
      </Helmet>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white"
      >
        <div className="flex items-center gap-2 mb-2">
          <TbPuzzle className="text-2xl" />
          <h1 className="text-xl font-bold">Pinnacle Enigma</h1>
        </div>
        <p className="text-sm text-purple-100 leading-relaxed">
          Welcome, puzzle hunters! Hidden across this website are <strong>7 clues</strong> 
          waiting to be solved. Each clue tests your skills in math, observation, 
          logic, and general knowledge. Solve them all, screenshot your score, and send it to Arif!
        </p>
      </motion.div>

      {/* Clues */}
      <div className="space-y-4 mb-6">
        {clues.map((clue, idx) => (
          <ClueCard
            key={clue.id}
            clue={clue}
            index={idx}
            status={answers[clue.id] ?? null}
            onAnswer={handleAnswer}
          />
        ))}
      </div>

      {/* Score */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`p-6 rounded-2xl border text-center transition-all duration-500 ${
          allAnswered
            ? 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800'
            : 'bg-white/40 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-700'
        }`}
      >
        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">
          {allAnswered ? 'Final Result' : 'Progress'}
        </h3>
        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
          {correctCount} / {total}
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          {allAnswered
            ? 'You solved all the clues! Screenshot this result and send it to Arif via WhatsApp / Instagram!'
            : `You have answered ${revealedClues} of ${total} clues. ${revealedClues === total ? '' : 'Keep going!'}`}
        </p>

        {allAnswered && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className={`px-4 py-2 rounded-xl text-sm font-semibold ${
              correctCount === total
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                : correctCount >= total / 2
                  ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
            }`}>
              {correctCount === total
                ? 'Perfect! 🏆'
                : correctCount >= total / 2
                  ? 'Not bad! 👍'
                  : 'Try again! 💪'}
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-xl cursor-default">
              <TbSend /> Screenshot & Send via WhatsApp
            </span>
            <a
              href="https://www.instagram.com/__aapinn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-xl hover:shadow-lg duration-300"
            >
              Send via Instagram
            </a>
          </div>
        )}

        {!allAnswered && (
          <p className="text-xs text-neutral-400">
            Once you answer all clues, screenshot this page and send it to Arif!
          </p>
        )}
      </motion.div>
    </div>
  )
}

export default Enigma
