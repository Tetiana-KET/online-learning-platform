import { Course } from '@models/Course';
import { replaceSpaceWithDash } from '@utils/replaceSpaceWithDash';
import { Button } from './Button';
import ImageFigure from './ImageFigure';

export function GalleryCard(props: Course, isDetailsOpen: boolean = false) {
  const { title, photos, description, id, instructors, difficultyLevel, topics, category } = props;
  const galleryCard = document.createElement('div');
  galleryCard.classList.add('gallery__card');

  // Image Section
  const imgWrap = document.createElement('div');
  const figure = ImageFigure(imgWrap, photos[0], `The image for the course: ${title}`);

  // Course Info Section
  const figcaption = document.createElement('figcaption');
  figcaption.classList.add('galleryCard__course-info', 'course-info');

  const courseTitle = document.createElement('h3');
  courseTitle.classList.add('course-info__title');
  courseTitle.textContent = `${title}`;

  const courseInfo = document.createElement('p');
  courseInfo.classList.add('course-info__description');
  courseInfo.textContent = `${description}`;

  // Course Link
  const courseLink = document.createElement('a');
  courseLink.classList.add('course-info__link');
  courseLink.href = `/course/${replaceSpaceWithDash(title)}_${id}`;
  courseLink.setAttribute('data-link', '');

  // Category
  const courseCategory = document.createElement('p');
  courseCategory.classList.add('course-info__category');
  courseCategory.innerHTML = `<span>Category:</span> ${category}`;

  // Difficulty Level
  const difficulty = document.createElement('p');

  difficulty.classList.add('course-info__difficulty');
  difficulty.innerHTML = `<span>Difficulty:</span> ${difficultyLevel}`;

  galleryCard.append(figure, courseLink);
  figure.append(figcaption);
  figcaption.append(courseTitle, courseInfo, difficulty, courseCategory);

  // Conditional Details
  if (isDetailsOpen) {
    galleryCard.classList.add('details_open');
    const detailsAdditional = document.createElement('div');
    detailsAdditional.classList.add('details__additional');

    // image shadow
    const imgShadow = document.createElement('div');
    imgShadow.classList.add('img-shadow');
    imgWrap.append(imgShadow);

    // Topics
    const topicsList = document.createElement('ul');
    topicsList.innerHTML = `<span>Topics:</span>`;
    topicsList.classList.add('course-info__topics');
    topics.forEach((topic) => {
      const topicItem = document.createElement('li');
      topicItem.textContent = `${topic};`;
      topicsList.append(topicItem);
    });

    // Instructors
    const instructorsList = document.createElement('ul');
    instructorsList.innerHTML = `<span>Course Mentors:</span>`;
    instructorsList.classList.add('course-info__instructors');
    instructors.forEach((instructor) => {
      const instructorItem = document.createElement('li');
      instructorItem.textContent = `${instructor};`;
      instructorsList.append(instructorItem);
    });
    figcaption.append(topicsList);

    // Enroll button
    const buttonWrap = document.createElement('div');
    buttonWrap.classList.add('enroll-button-wrap');
    const enrollButton = Button('Enroll', '');
    figure.after(buttonWrap);
    buttonWrap.append(enrollButton);
  }
  return galleryCard;
}
