import React from 'react';
import {EyeProps} from './eye.types';
import './eye.css';

export const EyeLateralities = Object.freeze({
  LEFT: 'left',
  RIGHT: 'right'
});

const Eye: React.FC<EyeProps> = props => {
  return (
    <div className={`eye ${props.laterality}`}>
      <div className='iris' style={props.irisStyle}/>
      <div className='reflection'></div>
    </div>
  );
};

export default Eye;
