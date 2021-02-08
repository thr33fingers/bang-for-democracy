import React from 'react';
import {CounterProps} from './counter.types';
import './counter.css';

const Counter: React.FC<CounterProps> = props => {
  return (
    <div className='counter-container'>
      <div className='counter-numbers'>
        {props.value?.toLocaleString()}
      </div>
      <div className='counter-text'>Bang for <br/>democracy</div>
    </div>
  );
};

export default Counter;
