const BangSoundEffect = new Audio('/pot-and-pan.mp3');
const MeowSoundEffect = new Audio('/meow.mp3');

export const getRotatingMessage = (counter: number = 0): string => {
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
    'ရုံးမတက်နဲ့ ရုန်းထွက်'
  ];

  return messages[counter % messages.length];
};

export const getInitialCounter = (): number => {
  return parseInt(new Date().getTime().toString().slice(6, 12));
};

export const playBangSound = () => {
  // play bang sound for pdt and ladle
  // ideally this should be in banger component but safari on ios does not allow
  // autoplaying sound so this needs to be inside user action event
  BangSoundEffect.pause();
  BangSoundEffect.currentTime = 0;
  BangSoundEffect.play();
};

export const playMeowSound = () => {
  MeowSoundEffect.pause();
  MeowSoundEffect.currentTime = 0;
  MeowSoundEffect.play();
};

type Vector = [number, number]; // [x, y]
export const radianBetween = (a: Vector, b: Vector): number => {
  const aLength = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
  const bLength = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
  const dot = a[0] * b[0] + a[1] * b[1];
  return Math.acos(dot / (aLength * bLength));
}
