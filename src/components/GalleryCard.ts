import { Course } from '@models/Course';

export function GalleryCard(props: Course, isDetailsOpen: boolean = false) {
  const { title, photos, description, id, instructors, difficultyLevel, topics, category } = props;
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
  courseLink.href = `/course/${id}`;
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

    // Instructors
    const instructorsList = document.createElement('ul');
    instructorsList.classList.add('course-info__instructors');
    instructors.forEach((instructor) => {
      const instructorItem = document.createElement('li');
      instructorItem.textContent = instructor;
      instructorsList.append(instructorItem);
    });

    // Topics
    const topicsList = document.createElement('ul');
    topicsList.classList.add('course-info__topics');
    topics.forEach((topic) => {
      const topicItem = document.createElement('li');
      topicItem.textContent = topic;
      topicsList.append(topicItem);
    });

    figcaption.append(instructorsList, difficulty, topicsList, courseCategory);
  }
  return galleryCard;
}
