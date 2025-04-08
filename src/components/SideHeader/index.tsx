"use client"
import { useState } from "react";
import style from "./style.module.scss"
import Nav from "./nav/index"
import { AnimatePresence } from "framer-motion";

const index = () => {
  const [isActive, setIsActive]  = useState(false)

  return ( 
    <>
      <div onClick={() => setIsActive(!isActive)} className={style.button}>
        <div className={`${style.burguer} ${isActive ? style.burguerActive: ""}`}></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
   );
}
 
export default index;