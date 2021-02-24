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
  return parseInt('1' + new Date().getTime().toString().slice(6, 12));
};

export const playSound = (audio: HTMLAudioElement) => {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
};

type Vector = [number, number]; // [x, y]
export const radianBetween = (a: Vector, b: Vector): number => {
  const aLength = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
  const bLength = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
  const dot = a[0] * b[0] + a[1] * b[1];
  return Math.acos(dot / (aLength * bLength));
}

export const loadImage = (path: string) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => resolve(path);
  img.onerror = () => reject();
  img.src = path;
});

export const loadAudio = (path: string) => new Promise((resolve, reject) => {
  const audio = new Audio(path);
  audio.oncanplaythrough = () => resolve(audio);
  audio.onerror = () => reject();
  return audio;
});
