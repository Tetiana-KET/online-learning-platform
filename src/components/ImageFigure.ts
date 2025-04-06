import { DEFAULT_IMG_PATH } from '@consts/DEFAULT_IMG_PATH';

export default function ImageFigure(imgWrap: HTMLDivElement, path: string, altText: string) {
  const figure = document.createElement('figure');
  imgWrap.classList.add('ratio-box');
  const picture = document.createElement('picture');
  const webpSource = document.createElement('source');
  webpSource.srcset = path;
  webpSource.type = 'image/webp';

  const fallbackImg = document.createElement('img');
  fallbackImg.src = DEFAULT_IMG_PATH;
  fallbackImg.alt = altText;
  fallbackImg.loading = 'lazy';

  picture.append(webpSource, fallbackImg);
  imgWrap.append(picture);
  figure.append(imgWrap);

  return figure;
}
