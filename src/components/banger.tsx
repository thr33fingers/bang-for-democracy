import React from 'react';
import {animated} from 'react-spring';
import Pan from '../assets/pan.svg';
import Ladle from '../assets/ladle-wooden.svg';
import {BangerProps} from './banger.types';
import './banger.css';

const Banger: React.FC<BangerProps> = props => {
  return (
    <div className='banger'>
      <div className='banger-inner-wrapper'>
        <div className='banger-inner'>
          <img className='pan' src={Pan}/>
          <animated.img
            className='ladle'
            src={Ladle}
            style={props.rxy}/>
        </div>
      </div>
    </div>
  );
};

export default Banger;
