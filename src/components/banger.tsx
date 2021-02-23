import React from 'react';
import {animated} from 'react-spring';
import Pan from '../assets/pan.svg';
import Ladle from '../assets/ladle-wooden.svg';
import {BangerProps} from './banger.types';
import {useLadleBang} from './banger.hooks';
import './banger.css';

const Banger = React.forwardRef<HTMLDivElement, BangerProps>((props, ref) => {
  const ladleStyle = useLadleBang(props.counter);

  return (
    <div className='banger' style={props.style} ref={ref}>
      <div className='banger-inner'>
        <img className='pan' src={Pan}/>
        <animated.img
          className='ladle'
          src={Ladle}
          style={ladleStyle}/>
      </div>
    </div>
  );
});

export default Banger;
