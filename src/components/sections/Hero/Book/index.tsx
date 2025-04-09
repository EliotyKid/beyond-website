import Image from "next/image";
import styles from "./style.module.scss"

const index = () => {
  return ( 
    <div className={styles.card}>
      <div className={styles.content}>
        <Image
          src="/Page.webp"
          alt=""
          width={100}
          height={150}
        />
      </div>
      <div className={styles.cover}>
        <Image
          src="/cover.webp"
          alt=""
          width={300}
          height={500}
        />
        <Image
          src="/firstcard.png"
          alt=""
          width={300}
          height={500}
        />
      </div>

    </div>
   );
}
 
export default index;