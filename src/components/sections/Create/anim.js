export const jimAnim = {
  initial: {
    scale: 3,
    // y: +300
  },
  enter: {
    scale: 1,
    y: 0,
    transition: {
      duration: 1.3,
      ease: [0.76, 0, 0.24, 1],
    },
  }
}

export const singularityAnim = {
  initial: {
    scale: 0,
    y: +200
  },
  enter: {
    scale: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1.3,
      ease: [0.76, 0, 0.24, 1],
    },
  }
}