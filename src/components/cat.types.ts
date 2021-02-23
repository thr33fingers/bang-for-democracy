export type CatProps = {
  onAnimationComplete: () => void,
  onAnimationFrame: (poopLeft: number, poopTop: number) => void,
  style?: React.CSSProperties,
  targetPosition: [number, number] | undefined;
};
