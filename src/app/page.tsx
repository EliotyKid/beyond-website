"use client"
import styles from "./page.module.scss"
import { useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader"
import Hero from "@/components/sections/Hero"
import Create from "@/components/sections/Create"
import Mission from "@/components/sections/Mission"
import Call from "@/components/sections/Call"
import Comunity from "@/components/sections/Comunity"
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
  const [canAnimateCall, setCanAnimateCall] = useState(false)
  const [canAnimateComunity, setCanAnimateComunity] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline>(null)

  console.log("renderizou")

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
    }, 2000)
  },[])


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: mainRef.current,
        pin: ".container",
        scrub: true,
        start: "top top",
        end: "+=16000px",
      },
      defaults: {
        duration: 1.5,        // ou o valor que preferir
        ease: "power2.inOut", // qualquer ease suave
      }
    })
    

    tl.addLabel("heroStart")
    .to({},{duration: .5})

      .addLabel("createStart")
      .from(".create",{
        opacity: 0,
        onComplete: () => setCanAnimateCreate(true),
        onStart: () => setCanAnimateCreate(false)
      })
      .to({},{duration: 1})
      .to(".create",{
        scale: 3,
        yPercent: "-80"
      })
      

      .addLabel("missionStart")
      .from(".mission",{
        opacity: 0,
        scale: 0,
        borderRadius: "100%",
        onComplete: () => setCanAnimateMission(true),
        onStart: () => setCanAnimateMission(false),
      })
      .to(".create",{
        opacity: 0,
        scale: 7,
        yPercent: "-186"
      },"<")
      .to({},{duration: 1})
      .to(".mission",{
        scale: 8,
        xPercent: "+100",
        yPercent: "+170"
      })
      
      .addLabel("callStart")
      .from(".call",{
        opacity: 0,
        scale: 0,
        borderRadius: "100%",
        onComplete: () => setCanAnimateCall(true),
        onStart: () => setCanAnimateCall(false),
      })
      .to(".mission",{
        scale: 20,
        opacity: 0,
        xPercent: "+250",
        yPercent: "+425"
      },"<")
      .to({},{duration: 1})
      
      .addLabel("comunityStart")
      .from(".comunity",{
        opacity: 0,
        scale: 0,
        onComplete: () => setCanAnimateComunity(true),
        onStart: () => setCanAnimateComunity(false)
      })
      .to(".call",{
        opacity: 0,
        scale: 8
      }, "<")
      .to({},{duration: 1})
    
      

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
         <Mission canAnimate={canAnimateMission}/>
        </section>
        <section className="call">
         <Call canAnimate={canAnimateCall}/>
        </section>
        <section className="comunity">
          <Comunity canAnimate={canAnimateComunity}/>
        </section>
      </div>
    </main>
  );
}
