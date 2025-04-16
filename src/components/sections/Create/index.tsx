import styles from "./style.module.scss"
import Image from "next/image";
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
        <SplitText style="megatitle" content="Create Your" canAnimate={canAnimate}/>
        <SplitText style="megatitle" content="Universe" canAnimate={canAnimate}/>
      </div>
    </div>
   );
}
 
export default index;
