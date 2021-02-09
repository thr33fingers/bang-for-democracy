import React, {useRef, useState} from 'react';
import Eye, {EyeLateralities} from './components/eye';
import Body from './components/body';
import Counter from './components/counter';
import Banger from './components/banger';
import './App.css';
import './console_art';

const getRotatingMessage = (counter: number = 0) => {
  // prefer call to actions
  const messages = [
    'Civil disobedience movement',
    'စစ်အာဏာရှင်စနစ် အလိုမရှိ',
    'Hear the voice of Myanmar',
    'အရေးတော်ပုံ အောင်ရမည်',
    'Reject military coup',
    'ကမ္ဘာမကြေဘူး',
    'Respect our votes',
    'မတရားမှုမှန်သမျှ ဆန့်ကျင်ကြ',
    'Save Myanmar',
    'ပြည်သူအားလုံး ပူးပေါင်းပါဝင်ကြ',
    'We want democracy',
    'ညီညီညွတ်ညွတ် တီးကြစို့',
    'Release Aung San Su Kyi',
  ];

  return messages[counter % messages.length];
};


const App = () => {
  const [counter, setCounter] = useState(Math.floor(new Date().getTime() / 10000000));
  const [message, setMessage] = useState(getRotatingMessage(counter));
  const [irisStyle, setIrisStyle] = useState<React.CSSProperties | undefined>();
  const [bangerStyle, setBangerStyle] = useState<React.CSSProperties | undefined>();
  const bangerRef = useRef<Element>();

  const onMouseMove = (e: React.MouseEvent) => {
    // animate eye movements
    const irisWidth = 20;
    const irisHeight = 12;
    const irisOffsetX = irisWidth * ((e.clientX / window.innerWidth) - 0.5);
    const irisOffsetY = irisHeight * ((e.clientY / window.innerHeight) - 0.5);
    setIrisStyle({transform: `translate(${irisOffsetX}px, ${irisOffsetY}px)`});

    if (bangerRef.current) {
      setBangerStyle({
        left: e.pageX - (bangerRef.current?.clientWidth as number) / 2,
        top: e.pageY - (bangerRef.current?.clientHeight as number) / 2
      });
    }
  };

  const onClick = () => {
    // update counter and start bang animation
    setCounter(counter + 1);
    setMessage(getRotatingMessage(counter + 1));
  };

  return (
    <div className='App' onMouseMove={onMouseMove} onClick={onClick}>
      <div className='app-background'/>
      <h1 className='message'>{message}</h1>
      <div className='min-aung-hlaing'>
        <div className='min-aung-hlaing-inner'>
          <div className='eyes'>
            <Eye
              laterality={EyeLateralities.LEFT}
              irisStyle={irisStyle}/>
            <Eye
              laterality={EyeLateralities.RIGHT}
              irisStyle={irisStyle}/>
          </div>
          <Body/>
        </div>
      </div>
      <Banger bangerStyle={bangerStyle} counter={counter} ref={bangerRef}/>
      <Counter value={counter}/>
    </div>
  );
}

export default App;
