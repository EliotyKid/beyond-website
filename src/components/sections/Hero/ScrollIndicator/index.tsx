import styles from "./style.module.scss"

const index = () => {
  return ( 
    <div className={styles.scrollIndicator}>
      <div className={styles.arrow}>⬇</div>
      <span>SCROLL</span>
    </div>
   );
}
 
export default index;