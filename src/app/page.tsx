"use client"
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader/index"
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
    }, 2000)
  })

  return (
    <main>
      <AnimatePresence mode="wait">
        { isLoading && <Preloader /> }
      </AnimatePresence>
      <div>Hello world!</div>
    </main>
  );
}
