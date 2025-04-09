import styles from "./style.module.scss"
import Book from "./Book/index"
import Image from "next/image";
import ScrollIndicator from "./ScrollIndicator/index"
import { motion } from "framer-motion";
import { logoVariant, opacity } from "./anim"

interface props {
  canAnimate: boolean
}

const index = ({canAnimate}: props) => {
  return ( 
    <div className={styles.main}>
      <motion.div 
        variants={logoVariant}
        initial="initial"
        animate={`${canAnimate ? "enter" : "initial"}`}
        className={styles.logo}
      >
        <Image
          src="/Beyond.webp"
          alt=""
          width={600}
          height={250}
        />
      </motion.div>

      <motion.div 
        variants={opacity}
        initial="initial"
        animate={`${canAnimate ? "enter" : "initial"}`}
        custom={1}
        className={styles.book}
      >
        <Book/>
      </motion.div>

      <motion.div 
        variants={opacity}
        initial="initial"
        animate={`${canAnimate ? "enter" : "initial"}`}
        custom={3}
        className={styles.book}
      >
        <ScrollIndicator/>
      </motion.div>
    </div>
   );
}
 
export default index;