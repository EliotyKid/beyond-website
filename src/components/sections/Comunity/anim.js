export const planetAnim = {
  initial: {
    scale: 0.5,
    y: -200
  },
  enter: {
    scale: 1,
    y: 450,
    // x: -50,
    transition: {
      duration: 1.3,
      ease: [0.76, 0, 0.24, 1],
    },
  }
}

export const danteAnim = {
  initial: {
    y: 600
  },
  enter: {
    y: 0,
    transition: {
      delay: .5,
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  }
}

export const debAnim = {
  initial: {
    y: 1200
  },
  enter: {
    y: 0,
    transition: {
      delay: .2,
      duration: 2,
      ease: [0.76, 0, 0.24, 1],
    },
  }
}