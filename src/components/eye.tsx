import React from 'react';
import {animated} from 'react-spring';
import {EyeProps} from './eye.types';
import './eye.css';

export const EyeLateralities = Object.freeze({
  LEFT: 'left',
  RIGHT: 'right'
});

const Eye: React.FC<EyeProps> = props => {
  const irisSpringTransform =
    props.xy.interpolate((x: number, y: number) => {
      return `translate3d(${x}px, ${y}px, 0)`;
    });

  return (
    <div className={`eye ${props.laterality}`}>
      <animated.div
        className='iris'
        style={{transform: irisSpringTransform}}/>
      <div className='reflection'></div>
    </div>
  );
};

export default Eye;
