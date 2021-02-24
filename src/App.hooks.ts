import {useState, useEffect} from 'react';
import {loadImage, loadAudio} from './App.utils';
import BodyImage from './assets/minaunghlaing.webp';
import IrisImage from './assets/iris.webp';
import ReflectinImage from './assets/reflection.png';
import PanImage from './assets/pan.svg';
import LadleImage from './assets/ladle-wooden.svg';
import CatImage from './assets/cat.webp';
import CatPoopImage from './assets/cat-poop.webp';

type PreloadedAssetsData = {
  // images
  bodyImage: string,
  catImage: string,
  catPoopImage: string,
  irisImage: string,
  ladleImage: string,
  panImage: string,
  reflectionImage: string

  // sounds
  bangSound: HTMLAudioElement,
  meowSound: HTMLAudioElement
};

export const usePreloadedAssets = (): {
  loading: boolean,
  data?: PreloadedAssetsData,
  error?: any
} => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PreloadedAssetsData>();
  const [error, setError] = useState();

  useEffect(
    () => {
      Promise.all([
        loadImage(BodyImage),
        loadImage(IrisImage),
        loadImage(ReflectinImage),
        loadImage(PanImage),
        loadImage(LadleImage),
        loadImage(CatImage),
        loadImage(CatPoopImage),
        // sounds
        loadAudio('/pot-and-pan.mp3'),
        loadAudio('/meow.mp3'),

        // artificial delay for loading screen
        new Promise(resolve => setTimeout(resolve, 1000))
      ])
        .then(r => {
          setData({
            bodyImage: r[0] as string,
            irisImage: r[1] as string,
            reflectionImage: r[2] as string,
            panImage: r[3] as string,
            ladleImage: r[4] as string,
            catImage: r[5] as string,
            catPoopImage: r[6] as string,
            bangSound: r[7] as HTMLAudioElement,
            meowSound: r[8] as HTMLAudioElement
          });
        })
        .catch(error => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    []
  );

  return {loading, data, error};
};
