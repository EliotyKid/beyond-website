"use client"
import styles from "./page.module.scss"
import { useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader"
import Hero from "@/components/sections/Hero"
import Create from "@/components/sections/Create"
import Mission from "@/components/sections/Mission"
import AmbientSound from "@/components/AmbientSound";

import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [canAnimateHero, setCanAnimateHero] = useState(false) 
  const [canAnimateCreate, setCanAnimateCreate] = useState(false)
  const [canAnimateMission, setCanAnimateMission] = useState(false)

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
        markers: true,
        trigger: mainRef.current,
        pin: ".container",
        scrub: true,
        start: "top top",
        end: "+=16000px",
      }
    })

    const scale = 1.5

    tl.addLabel("heroStart")
      .to(".hero",{duration: 0.1})

      .addLabel("createStart")
      .from(".create", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => setCanAnimateCreate(true),
        onStart: () => setCanAnimateCreate(false)
      })
      .addPause(1)
      .to(".create", {
        scale: scale+4,
        yPercent: "-160"
      })  

      .addLabel("missionStart")
      .from(".mission", {
        opacity: 0,
        scale: 0,
        borderRadius: "100%",
        duration: 0.5,
        onComplete: () => setCanAnimateMission(true),
        onStart: () => setCanAnimateMission(false)
      },">-0.35")
      
      .addLabel("callStart")
      .from(".call",{
        
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
        <section className="hero">
          <Hero canAnimate={canAnimateHero}/>
        </section>
        <section className="create">
          <Create canAnimate={canAnimateCreate}/>
        </section>
        <section className="mission">
         <Mission />
        </section>
        <section className="call">
         
        </section>
      </div>
    </main>
  );
}
