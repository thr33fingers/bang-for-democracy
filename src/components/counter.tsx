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
      <div className='counter-ref'>
        Brought to you by
        <a
          href='https://www.facebook.com/groups/burmeselinkedin'
          target='_blank'
          className='ref-link'>
          Burmese Linkedin
        </a>
      </div>
    </div>
  );
};

export default Counter;
