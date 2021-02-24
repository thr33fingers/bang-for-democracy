import React from 'react';
import {BodyProps} from './body.types';
import './body.css';

const Body: React.FC<BodyProps> = props => {
  return (
    <div className='body-container'>
      <div className='body' style={{backgroundImage: `url(${props.imageSrc})`}}/>
    </div>
  );
};

export default Body;
