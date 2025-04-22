export const jimAnim = {
  initial: { 
    scale: 0.3,
    opacity: 0
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

export const danteAnim = {
  initial: { 
    scale: 1.4,
  },
  enter: {
    scale: 1,
    transition: {
      duration: 1.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}

export const containerAnim = {
  initial: { 
    x: -100,
  },
  enter: { 
    delay: 2,
    x: "0",
    transition: {
      duration: 1.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}