import styles from "./style.module.scss"
import Image from "next/image";
import SplitText from "@/components/SliptText";
import { motion } from "framer-motion"
import { jimAnim, singularityAnim } from "./anim"

interface props {
  canAnimate: boolean
}

const index = ({canAnimate}: props) => {
  return ( 
    <div className={styles.main}>

      <motion.div 
        variants={jimAnim}
        initial="initial"
        animate={canAnimate ? "enter" : "initial"}
        className={styles.bg}
      >
        <Image
          src="/img/create/create-jim-img.png"
          alt=""
          width={1280}
          height={720}
        />
      </motion.div>

      <motion.div 
        variants={singularityAnim}
        initial="initial"
        animate={canAnimate ? "enter" : "initial"}
        className={styles.bg}
      >
        <Image
          src="/img/create/create-singularity-img.png"
          alt=""
          width={1280}
          height={720}
        />
      </motion.div>
      <div className={styles.titleDiv}>
        <SplitText style="megatitle" content="Create Your" canAnimate={canAnimate}/>
        <SplitText style="megatitle" content="Universe" canAnimate={canAnimate}/>
      </div>
    </div>
   );
}
 
export default index;
