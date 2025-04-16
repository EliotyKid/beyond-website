import SplitText from "@/components/SliptText";
import styles from "./style.module.scss"
import { motion } from "framer-motion"
import { jimAnim, danteAnim, containerAnim } from "./anim"

import Image from "next/image"

interface props {
  canAnimate: boolean
}

const index = ({canAnimate}: props) => {
  return ( 
    <div className={styles.main}>
      
      <motion.div 
        variants={jimAnim}
        initial="initial"
        animate={`${canAnimate ? "enter" : "initial"}`}
        className={styles.bg}
      >
        <Image
          src="/img/mission/mission-jim-img.png"
          alt=""
          width={600}
          height={250}
          priority
          unoptimized
        />
      </motion.div>
      <motion.div
        variants={danteAnim}
        initial="initial"
        animate={`${canAnimate ? "enter" : "initial"}`}
        className={styles.bg}
      >
        <Image
          src="/img/mission/mission-dante-img.png"
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
      >
          <SplitText content="Mission" canAnimate={canAnimate} style="title"/>
       
          <SplitText duration={0.5} delay={0.05} style="text" content="We are BEYOND COMPANY®, a platform where fans, nerds, and artists collaborate in the creation of an interconnected universe of comics, games, and animations. Our mission is to become the leading reference in immersive entertainment, revolutionizing the way people create and interact with content." canAnimate={canAnimate}/>
      </motion.div>

    </div>
   );
}
 
export default index;