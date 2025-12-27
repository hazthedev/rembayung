'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string[]
  speed?: number
  deleteSpeed?: number
  delayBetween?: number
  className?: string
  cursor?: boolean
}

export function TypewriterText({
  text,
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
  className = '',
  cursor = true
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentFullText = text[currentTextIndex]

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false)
        if (currentTextIndex < text.length - 1) {
          setCurrentTextIndex(currentTextIndex + 1)
          setIsDeleting(true)
        } else {
          // Restart from beginning
          setCurrentTextIndex(0)
          setIsDeleting(true)
        }
      } else if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          setIsDeleting(false)
        }
      } else {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        } else {
          setIsPaused(true)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, text, speed, deleteSpeed])

  return (
    <span className={className}>
      {currentText}
      {cursor && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

// Single line typewriter effect (no cycling)
export function SingleTypewriterText({
  text,
  speed = 50,
  className = '',
  cursor = true,
  delay = 0
}: {
  text: string
  speed?: number
  className?: string
  cursor?: boolean
  delay?: number
}) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index))
          index++
        } else {
          clearInterval(interval)
          if (cursor) {
            setTimeout(() => setShowCursor(false), 1000)
          }
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, cursor, delay])

  return (
    <span className={className}>
      {displayText}
      {cursor && showCursor && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}