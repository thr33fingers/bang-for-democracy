import {useEffect, useRef, useState} from 'react';
import {useSpring} from 'react-spring';

const BangSoundEffect = new Audio('/pot-and-pan.ogg');

export function useLadleBang(counter: number): React.CSSProperties {
  const initialMount = useRef(true);
  const [isBanged, setIsBanged] = useState(false);
  const duration = 200; // ms

  const ladleStyle = useSpring(
    {
      transform: isBanged
        ? 'rotate(172deg) translate3d(0, -60px, 0)'
        : 'rotate(160deg) translate3d(24px, -60px, 0)',
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
