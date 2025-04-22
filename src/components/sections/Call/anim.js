export const debsAnim = {
  initial:{
    x: -600,
    y: -300
  },
  enter:{
    x: 0,
    y: 0,
    transition: {
      duration: 2,
      ease: [0.76, 0, 0.24, 1],
    },
  }
}

export const containerAnim = {
  initial: { 
    x: 200,
    y: 100
  },
  enter: { 
    x: 0,
    y: 0,
    transition: {
      delay: 0.8,
      delayChildren: 1.3,
      duration: 1.3,
      ease: [0.76, 0, 0.24, 1],
    },
  },
}