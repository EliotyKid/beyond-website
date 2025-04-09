export const barSound = {
  animate: (i)=>({
    scaleY: [1, 0.5, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.1 * i 
    },
  }),

  nonAnimate: {
    scaleY: 0.5,
  }
}