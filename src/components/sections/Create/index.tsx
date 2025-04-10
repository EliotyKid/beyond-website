import styles from "./style.module.scss"
import Image from "next/image";
import Title from "./Title"
import SplitText from "@/components/SliptText";

interface props {
  canAnimate: boolean
}

const index = ({canAnimate}: props) => {
  return ( 
    <div className={styles.main}>
      <div className={styles.bg}>
        <Image
          src="/create-img.png"
          alt=""
          width={1280}
          height={720}
        />
      </div>
      <div className={styles.titleDiv}>
        <SplitText content="Create Your" canAnimate={canAnimate}/>
        <SplitText content="Universe" canAnimate={canAnimate}/>
      </div>
    </div>
   );
}
 
export default index;
