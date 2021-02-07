import React from 'react';
import {animated} from 'react-spring';
import Pan from '../assets/pan.svg';
import Ladle from '../assets/ladle-wooden.svg';
import {BangerProps} from './banger.types';
import {useLadleBang} from './banger.hooks';
import './banger.css';

const Banger = React.forwardRef((props: BangerProps, ref) => {
  const ladleStyle = useLadleBang(props.counter);

  return (
    // @ts-ignore
    <div className='banger' style={props.bangerStyle} ref={ref}>
      <div className='banger-inner-wrapper'>
        <div className='banger-inner'>
          <img className='pan' src={Pan}/>
          <animated.img
            className='ladle'
            src={Ladle}
            style={ladleStyle}/>
        </div>
      </div>
    </div>
  );
});

export default Banger;
