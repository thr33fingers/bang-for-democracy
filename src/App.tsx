import React, {useState} from 'react';
import {useSpring} from 'react-spring';
import Eye, {EyeLateralities} from './components/eye';
import Body from './components/body';
import Counter from './components/counter';
import Banger from './components/banger';
import './App.css';

const BangSoundEffect = new Audio('/pot-and-pan.ogg');

const App = () => {
  // TODO: we don't have backend now and probably never will :)
  const [counter, setCounter] = useState(Math.floor(new Date().getTime() / 10000000));

  const [eyeSpring, setEyeSpring] = useSpring(() => ({
    xy: [0, 0]  // [x, y]
  }));

  // @ts-ignore: typescript does not work well here with useSpring's
  // to and from so // ignore type checking here
  const ladleSpring = useSpring({
    from: {transform: 'rotate(140deg) translate3d(0, -60px, 0)'},
    to: [
      {transform: 'rotate(172deg) translate3d(0, -60px, 0)'},
      {transform: 'rotate(140deg) translate3d(0, -60px, 0)'}
    ],
    config: {duration: 250}
  });

  const onMouseMove = (e: React.MouseEvent) => {
    // animate eye movements
    const irisWidth = 20;
    const irisHeight = 16;
    const offsetX = irisWidth * ((e.clientX / window.innerWidth) - 0.5);
    const offsetY = irisHeight * ((e.clientY / window.innerHeight) - 0.5);
    setEyeSpring({xy: [offsetX, offsetY]});
  };

  const onClick = () => {
    // update counter and start bang animation
    setCounter(counter + 1);
    BangSoundEffect.pause();
    BangSoundEffect.currentTime = 0;
    BangSoundEffect.play();
  };

  return (
    <div className='App' onMouseMove={onMouseMove} onClick={onClick}>
      <div className='app-background'/>
      <div className='min-aung-hlaing'>
        <div className='min-aung-hlaing-inner'>
          <div className='eyes'>
            <Eye
              laterality={EyeLateralities.LEFT}
              xy={eyeSpring.xy}/>
            <Eye
              laterality={EyeLateralities.RIGHT}
              xy={eyeSpring.xy}/>
          </div>
          <Body/>
        </div>
      </div>
      <Banger rxy={ladleSpring}/>
      <Counter value={counter}/>
    </div>
  );
}

export default App;
