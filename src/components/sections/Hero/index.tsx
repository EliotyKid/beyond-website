import styles from "./style.module.scss"
import Book from "./Book/index"
import Image from "next/image";
import ScrollIndicator from "./ScrollIndicator/index"

const index = () => {
  return ( 
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image
          src="/Beyond.webp"
          alt=""
          width={600}
          height={250}
        />
      </div>

      <div className={styles.book}>
        <Book/>
      </div>

      <ScrollIndicator/>
    </div>
   );
}
 
export default index;