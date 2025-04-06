import { DEFAULT_IMG_PATH } from '@consts/DEFAULT_IMG_PATH';
import { Course } from '@models/Course';
import { replaceSpaceWithDash } from '@utils/replaceSpaceWithDash';

export function SliderCard(props: Course) {
  const { title, photos, description, id } = props;

  const sliderItem = document.createElement('li');
  sliderItem.classList.add('slider__item');

  const figure = document.createElement('figure');
  sliderItem.append(figure);

  const picture = document.createElement('picture');
  const webpSource = document.createElement('source');
  webpSource.srcset = photos[0];
  webpSource.type = 'image/webp';

  const fallbackImg = document.createElement('img');
  fallbackImg.src = DEFAULT_IMG_PATH;
  fallbackImg.alt = `The image for the course: ${title}`;
  fallbackImg.loading = 'lazy';

  const figcaption = document.createElement('figcaption');
  figcaption.classList.add('slider__item-info');

  const courseTitle = document.createElement('h3');
  courseTitle.classList.add('slider__item-title');
  courseTitle.textContent = `${title}`;

  const courseInfo = document.createElement('p');
  courseInfo.classList.add('slider__item-description');
  courseInfo.textContent = `${description}`;

  const courseLink = document.createElement('a');
  courseLink.classList.add('slider__item-link');
  courseLink.setAttribute('data-link', '');
  courseLink.href = `/course/${replaceSpaceWithDash(title)}_${id}`;

  figcaption.append(courseTitle, courseInfo);
  picture.append(webpSource, fallbackImg);
  figure.append(picture, figcaption, courseLink);

  return sliderItem;
}
