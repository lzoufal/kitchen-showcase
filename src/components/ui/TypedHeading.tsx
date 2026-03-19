'use client'

import { useState, useEffect } from 'react'

const LINES = ['Precision Engineered.', 'Stainless by Design.']
const CHAR_DELAY = 55   // ms per character
const LINE_PAUSE = 300  // ms pause between lines

interface TypedHeadingProps {
  className?: string
}

export function TypedHeading({ className }: TypedHeadingProps) {
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
      {!done && (
        <span className="animate-[blink_0.8s_step-end_infinite] ml-1 text-gold">|</span>
      )}
    </span>
  )
}
