import { menuSlide } from "../anim";
import Link from "./Link/index";
import styles from "./style.module.scss"
import { motion } from "framer-motion";
import Footer from "./Footer/index"
import Curve from "./Curve/index"

const index = () => {
  const navItems = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Work",
      href: "/Work"
    },
    {
      title: "About",
      href: "/About"
    },
    {
      title: "Contact",
      href: "/Contact"
    },
  ]

  return ( 
    <motion.div 
      variants={menuSlide} 
      animate="enter" 
      exit="exit" 
      initial="initial" 
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
            {
              navItems.map((item, index) => {
                return <Link key={index} data={{...item,index}}/>
              })
            }
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
   );
}
 
export default index;