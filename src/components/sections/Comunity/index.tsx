"use client"
import Image from "next/image";
import styles from "./style.module.scss"
import { motion } from "framer-motion"
import { danteAnim, planetAnim, debAnim } from "./anim"
import SplitText from "@/components/SliptText";
import { useEffect, useState } from "react";

interface props {
  canAnimate: boolean
}

const index = ({canAnimate}: props) => {
  const [canAnimateSplit, setCanAimateSplit] = useState(false)

  useEffect(() => {
    if (canAnimate) {
      const timeout = setTimeout(() => {
        setCanAimateSplit(true)
      }, 1000) // mesmo delay da animação do debAnim
  
      return () => clearTimeout(timeout)
    } else {
      setCanAimateSplit(false)
    }
  }, [canAnimate])
  

  return ( 
    <div className={styles.main}>
      <motion.div
        variants={debAnim}
        initial="initial"
        animate={canAnimate ? "enter" : "initial"}
        className={styles.bg}
        onAnimationComplete={() => setCanAimateSplit(true)}
      >
        <Image
          alt=""
          src={"/img/comunity/comunity-deb-img.png"}
          width={1280}
          height={720}
        />
      </motion.div>
      <motion.div
        variants={danteAnim}
        initial="initial"
        animate={canAnimate ? "enter" : "initial"}
        className={styles.bg}
      >
        <Image
          alt=""
          src={"/img/comunity/comunity-dante-img.png"}
          width={1280}
          height={720}
        />
      </motion.div>
      <motion.div
        variants={planetAnim}
        initial="initial"
        animate={canAnimate ? "enter" : "initial"}
        className={styles.bg}
      >
        <Image
          alt=""
          src={"/img/comunity/comunity-planet-img.png"}
          width={1280}
          height={720}
        />
      </motion.div>

      <motion.div
        className={styles.container}
      >
        <SplitText style="title" canAnimate={canAnimateSplit} content="Comunity" />

        <SplitText duration={0.5} delay={0.05} style="text" canAnimate={canAnimateSplit} content="At this initial stage, we are focused on recruitment and building a strong, engaged community. We are gathering the best talents and enthusiasts to create something truly special.

        SPOILER: Soon, we will make an announcement that promises to shock the entertainment industry and redefine how people consume content. Stay tuned!" />
      </motion.div>
    </div>
   );
}
 
export default index;