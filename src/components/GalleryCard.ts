import { Course } from '@models/Course';
import { replaceSpaceWithDash } from '@utils/replaceSpaceWithDash';
import { Button } from './Button';

export function GalleryCard(props: Course, isDetailsOpen: boolean = false) {
  const { title, photos, description, id, instructors, difficultyLevel, topics, category, addInfo } = props;
  const galleryCard = document.createElement('div');
  galleryCard.classList.add('gallery__card');

  // Image Section
  const figure = document.createElement('figure');
  const imgWrap = document.createElement('div');
  imgWrap.classList.add('ratio-box');

  const courseImg = document.createElement('img');
  courseImg.src = photos[0];
  courseImg.alt = `The image for the course: ${title}`;
  courseImg.loading = 'lazy';

  imgWrap.append(courseImg);
  figure.append(imgWrap);

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

    // Instructors
    const instructorsList = document.createElement('ul');
    instructorsList.innerHTML = `<span>Course Mentors:</span>`;
    instructorsList.classList.add('course-info__instructors');
    instructors.forEach((instructor) => {
      const instructorItem = document.createElement('li');
      instructorItem.textContent = `${instructor};`;
      instructorsList.append(instructorItem);
    });
    figcaption.append(instructorsList);

    // Enroll button
    const buttonWrap = document.createElement('div');
    buttonWrap.classList.add('enroll-button-wrap');
    const enrollButton = Button('Enroll', '');
    figure.after(buttonWrap);
    buttonWrap.append(enrollButton);

    //add-info
    const addInfoWrap = document.createElement('div');
    addInfoWrap.classList.add('course__detail-info');
    const addInfoTitle = document.createElement('h3');
    addInfoTitle.innerHTML = 'Course <span>Details</span>';
    const addInfoText = document.createElement('p');
    addInfoText.textContent = addInfo;

    // Topics
    const topicsList = document.createElement('ul');
    topicsList.innerHTML = `<span>Topics:</span>`;
    topicsList.classList.add('course-info__topics');
    topics.forEach((topic) => {
      const topicItem = document.createElement('li');
      topicItem.textContent = `${topic};`;
      topicsList.append(topicItem);
    });

    addInfoWrap.append(addInfoTitle);
    addInfoWrap.append(addInfoText);
    addInfoWrap.append(topicsList);
    galleryCard.append(addInfoWrap);
  }
  return galleryCard;
}
