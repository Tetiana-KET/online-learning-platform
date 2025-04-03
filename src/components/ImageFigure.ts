export default function ImageFigure(imgWrap: HTMLDivElement, path: string, altText: string) {
  const figure = document.createElement('figure');
  imgWrap.classList.add('ratio-box');

  const courseImg = document.createElement('img');
  courseImg.src = path;
  courseImg.alt = altText;
  courseImg.loading = 'lazy';

  imgWrap.append(courseImg);
  figure.append(imgWrap);

  return figure;
}
