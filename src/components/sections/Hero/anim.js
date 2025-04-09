export const logoVariant = {
  initial: {y: "-100px", opacity: 0},
  enter: {y: "0",opacity: 1, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
}

export const opacity = {
  initial: {opacity: 0},
  enter: (i) => ({opacity: 1, transition: {duration: i, ease: [0.76, 0, 0.24, 1]}}),
}