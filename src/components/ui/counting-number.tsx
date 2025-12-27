'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface CountingNumberProps {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  delay?: number
}

export function CountingNumber({
  target,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
  delay = 0
}: CountingNumberProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true)

      // Start counting after delay
      setTimeout(() => {
        const startTime = Date.now()
        const startValue = 0
        const endValue = target

        const animateCount = () => {
          const now = Date.now()
          const progress = Math.min((now - startTime) / duration, 1)

          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue)

          setCount(currentCount)

          if (progress < 1) {
            requestAnimationFrame(animateCount)
          } else {
            setCount(endValue)
          }
        }

        requestAnimationFrame(animateCount)
      }, delay)
    }
  }, [isInView, hasStarted, target, duration, delay])

  return (
    <div ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  )
}