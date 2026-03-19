'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const LINES = ['Precision Engineered.', 'Stainless by Design.']
const CHAR_DELAY = 55   // ms per character
const LINE_PAUSE = 300  // ms pause between lines

export function TypedHeading({ className }: { className?: string }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [lines, setLines] = useState<string[]>([''])
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return

    const currentLine = LINES[lineIndex]

    if (charIndex < currentLine.length) {
      const t = setTimeout(() => {
        setLines(prev => {
          const next = [...prev]
          next[lineIndex] = currentLine.slice(0, charIndex + 1)
          return next
        })
        setCharIndex(c => c + 1)
      }, CHAR_DELAY)
      return () => clearTimeout(t)
    }

    if (lineIndex < LINES.length - 1) {
      const t = setTimeout(() => {
        setLineIndex(l => l + 1)
        setCharIndex(0)
        setLines(prev => [...prev, ''])
      }, LINE_PAUSE)
      return () => clearTimeout(t)
    }

    setDone(true)
  }, [charIndex, lineIndex, done])

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
      <AnimatePresence>
        {!done && (
          <motion.span
            key="cursor"
            className="ml-0.5 text-gold"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: 'mirror' }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
          >
            |
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
