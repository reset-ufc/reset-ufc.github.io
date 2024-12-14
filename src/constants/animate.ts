export const animate = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export const titleAnimateProps = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export const downToUpAnimateProps = {
  initial: { opacity: 0, y: 100 }, // Aparece de baixo
  whileInView: { opacity: 1, y: 0 }, // Move para sua posição original
  exit: { opacity: 0, y: 100 }, // Sai voltando para baixo
};
