import React, {useEffect, useRef} from 'react';
import {useSpring, animated} from 'react-spring';
import {CatProps} from './cat.types';
import './cat.css';

const Cat = React.forwardRef<HTMLDivElement, CatProps>((props, ref) => {
  const poopRef = useRef<HTMLImageElement | null>(null);

  const trans = (...xy: any) => {
    return `translate(${xy[0]}px, ${xy[1]}px) rotate(90deg)`;
  };

  const [poopSpring, setPoopSpring] = useSpring<{xy: number[]}>(
    () => ({
      xy: [0, 140],
      config: {tension: 70, friction: 15},
      onFrame: (_value: {xy: number[]}) => {
        const poopRect = poopRef.current?.getBoundingClientRect();
        poopRect && props.onAnimationFrame(poopRect?.left, poopRect?.top);
      }
    })
  );

  useEffect(() => {
    if (props.targetPosition && poopRef?.current) {
      const poopRect = poopRef.current.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(props.targetPosition[0] - poopRect.left, 2)
        + Math.pow(props.targetPosition[1] - poopRect.top, 2)
      ) + 140;

      setPoopSpring({
        xy: [
          20,
          distance
        ],
        onRest: props.onAnimationComplete
      });
    }
  }, [props.targetPosition])

  return (
    <div className='cat' style={props.style} ref={ref}>
      <div className='cat-inner'>
        <animated.img
          className='cat-poop'
          src={props.catPoopImage}
          style={{transform: poopSpring.xy.interpolate(trans)}}
          ref={poopRef}/>
        <img className='cat-body' src={props.catImage}/>
      </div>
    </div>
  );
});

export default Cat;
