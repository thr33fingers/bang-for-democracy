import {useEffect, useRef, useState} from 'react';
import {useSpring} from 'react-spring';

export function useCatPoop(
  targetPosition: [number, number],
  onAnimationComplete: () => void
): React.CSSProperties {
  const poopStyle = useSpring(
    {
      transform: targetPosition
        ? `translate(20px, ${window.innerHeight - 50}px) rotate(90deg)`
        : 'translate(20px, 140px) rotate(90deg)',
      config: {mass: 1, tension: 40, friction: 20},
      onRest: onAnimationComplete
    }
  );

  return poopStyle;
}
