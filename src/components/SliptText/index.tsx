"use client"
import styles from "./style.module.scss"
import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

interface props {
  content: string
  canAnimate: boolean
}

export default function SplitText({ content, canAnimate }: props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<HTMLElement[] | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const el = containerRef.current.querySelector("h1")
    if (!el) return

    // Split text once and store
    const { words } = splitText(el)
    wordsRef.current = words

    // Sempre reseta o estilo dos words (útil para reiniciar)
    words.forEach(word => {
      word.style.opacity = "0"
      word.style.transform = "translateY(10px)"
    })

    // Se canAnimate for true, anima os words
    if (canAnimate) {
      document.fonts.ready.then(() => {
        containerRef.current!.style.visibility = "visible"

        animate(
          words,
          { opacity: [0, 1], y: [10, 0] },
          {
            type: "spring",
            duration: 2,
            bounce: 0.5,
            delay: stagger(0.2),
          }
        )
      })
    }
  }, [canAnimate, content]) // Incluí 'content' caso ele mude dinamicamente

  return (
    <div className={styles.container} ref={containerRef}>
      <h1 className={styles.splitWord}>
        {content}
      </h1>
    </div>
  )
}
