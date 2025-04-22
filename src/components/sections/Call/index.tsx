"use client"
import Image from "next/image";
import styles from "./style.module.scss"
import { debsAnim, containerAnim } from "./anim"
import { motion } from "framer-motion"
import SplitText from "@/components/SliptText";
import { useState } from "react";

interface props {
  canAnimate: boolean
}

const index = ({canAnimate}: props) => {
  const [canAnimateSplit, setCanAnimateSplit] = useState(false)

  return ( 
    <div className={styles.main}>
      <motion.div
        variants={debsAnim}
        initial=" initial"
        animate={canAnimate ? "enter" : "initial"}
        className={styles.bg}
      >
        <Image 
          src= "/img/call/call-img.png"
          alt=""
          width={1280}
          height={720}
        />
      </motion.div>

      <motion.div 
        variants={containerAnim}
        initial="initial"
        animate={`${canAnimate ? "enter" : "initial"}`}
        className={styles.container}
        onAnimationStart={() => {
          const containerDelay = 800 // 👈 valor em milissegundos
          setTimeout(() => {
            setCanAnimateSplit(canAnimate)
          }, containerDelay)
        }}
      >
          <SplitText content="Mission" canAnimate={canAnimateSplit} style="title"/>
       
          <SplitText duration={0.5} delay={0.05} style="text" content="We are BEYOND COMPANY®, a platform where fans, nerds, and artists collaborate in the creation of an interconnected universe of comics, games, and animations. Our mission is to become the leading reference in immersive entertainment, revolutionizing the way people create and interact with content." canAnimate={canAnimateSplit}/>
      </motion.div>
    </div>
   );
}
 
export default index;