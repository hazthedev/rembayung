"use client"

import { useEffect, useRef, useState } from 'react'

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "left" | "right" | "up" | "down"
  duration?: number
}

export function AnimatedElement({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px"
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getAnimationClass = () => {
    const baseClass = "transition-all ease-out"
    const directionClass = {
      left: "translate-x-12 opacity-0",
      right: "-translate-x-12 opacity-0",
      up: "translate-y-12 opacity-0",
      down: "-translate-y-12 opacity-0"
    }[direction]

    const visibleClass = isVisible ? "translate-x-0 translate-y-0 opacity-100" : directionClass

    return `${baseClass} ${visibleClass}`
  }

  const animationStyle = {
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}s`,
  }

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClass()}`}
      style={animationStyle}
    >
      {children}
    </div>
  )
}

export function FloatingElement({
  children,
  className = "",
  delay = 0,
  duration = 3,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}) {
  return (
    <div
      className={`${className} animate-bounce`}
      style={{
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      }}
    >
      {children}
    </div>
  )
}

export function ScaleIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px"
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const animationStyle = {
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}s`,
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    opacity: isVisible ? 1 : 0,
  }

  return (
    <div
      ref={ref}
      className={`${className} transition-all ease-out`}
      style={animationStyle}
    >
      {children}
    </div>
  )
}