import Image from "next/image";
import style from "./style.module.scss"
import { debsAnim } from "./anim"
import { motion } from "framer-motion"

interface props {
  canAnimate: boolean
}

const index = ({canAnimate}: props) => {
  return ( 
    <div>
      <motion.div
        variants={debsAnim}
        initial=" initial"
      >
        <Image 
          src= "/img/call/call-img.png"
          alt=""
          width={1280}
          height={720}
        />
      </motion.div>
    </div>
   );
}
 
export default index;