export type CatProps = {
  catImage: string;
  catPoopImage: string;
  onAnimationComplete: () => void;
  onAnimationFrame: (poopLeft: number, poopTop: number) => void;
  style?: React.CSSProperties;
  targetPosition: [number, number] | undefined;
};
