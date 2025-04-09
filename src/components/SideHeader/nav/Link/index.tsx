import Link from "next/link";
import styles from "./style.module.scss"
import { motion } from "framer-motion";
import { slide } from "../../anim";

interface DataType {
  

  data: {
    href: string,
    title: string,
    index: number
  }
}

const index = ({data}: DataType) => {
  

  return ( 
    <motion.div
      variants={slide}
      animate="enter"
      exit="exit"
      initial="initial"
      custom={data.index}
    >
      <Link href={data.href}  >
        {data.title}
      </Link>
    </motion.div>
   );
}
 
export default index;