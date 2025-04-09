import styles from "./style.module.scss"
import { motion } from "framer-motion";

const index = () => {
  return ( 
    <div className={styles.scrollIndicator}>
      <div className={styles.arrow}>⬇</div>
      <span>SCROLL</span>
    </div>
   );
}
 
export default index;