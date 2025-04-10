"use client"
import styles from "./page.module.scss"
import { useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader"
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/sections/Hero"
import AmbientSound from "@/components/AmbientSound";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [canAnimateHero, setCanAnimateHero] = useState(false) 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
    }, 2000)
  },[])

  const mainRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline>(null)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: mainRef.current,
        pin: ".container",
        scrub: true,
        start: "top top",
        end: "+=16000px",
      }
    })


    timelineRef.current = tl
  }, { scope: mainRef})

  return (
    <main ref={mainRef} className={styles.main}>
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => setCanAnimateHero(true)}
      >
        { isLoading && <Preloader /> }
      </AnimatePresence>

      <AmbientSound/>

      <div className={`${styles.containerSection} container`}>
        <section>
          <Hero canAnimate={canAnimateHero}/>
        </section>
      </div>
    </main>
  );
}
