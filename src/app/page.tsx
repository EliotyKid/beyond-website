"use client"
import styles from "./page.module.scss"
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader"
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/sections/Hero"
import AmbientSound from "@/components/AmbientSound";

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

  return (
    <main>
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => setCanAnimateHero(true)}
      >
        { isLoading && <Preloader /> }
      </AnimatePresence>

      <AmbientSound/>

      <div className={styles.containerSecrions}>
        <section>
          <Hero canAnimate={canAnimateHero}/>
        </section>
      </div>
    </main>
  );
}
