import {useEffect, useRef, useState} from 'react';
import {useSpring} from 'react-spring';

const BangSoundEffect = new Audio('/pot-and-pan.mp3');

export function useLadleBang(counter: number): React.CSSProperties {
  const initialMount = useRef(true);
  const [isBanged, setIsBanged] = useState(false);
  const duration = 200; // ms

  const ladleStyle = useSpring(
    {
      transform: isBanged
        ? 'rotate(172deg) translate(-55%, -30%)'
        : 'rotate(160deg) translate(0%, -30%)',
      config: {duration}
    }
  );

  useEffect(
    () => {
      if (!isBanged) return;

      const timeoutId = window.setTimeout(
        () => setIsBanged(false),
        duration
      );

      return () => window.clearTimeout(timeoutId);
    },
    [isBanged]
  );

  // trigger bang on counter change but not on initial mount
  useEffect(
    () => {
      if (initialMount.current) {
        initialMount.current = false;
      } else {
        setIsBanged(true);
        BangSoundEffect.pause();
        BangSoundEffect.currentTime = 0;
        BangSoundEffect.play();
      }
    },
    [counter]
  );

  return ladleStyle;
}
