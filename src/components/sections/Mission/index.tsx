import SplitText from "@/components/SliptText";
import styles from "./style.module.scss"

import Image from "next/image"

interface props {
  canAnimate: boolean
}

const index = ({canAnimate}: props) => {
  return ( 
    <div className={styles.main}>
      <div className={styles.bg}>
        <Image
          src="/mission-img.png"
          alt=""
          width={1280}
          height={720}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.titleDiv}>
          <SplitText content="Mission" canAnimate={canAnimate}/>
        </div>
        <div className={styles.content}>
          <SplitText content="We are BEYOND COMPANY®, a platform where fans, nerds, and artists collaborate in the creation of an interconnected universe of comics, games, and animations. Our mission is to become the leading reference in immersive entertainment, revolutionizing the way people create and interact with content." canAnimate={canAnimate}/>
        </div>
      </div>

    </div>
   );
}
 
export default index;