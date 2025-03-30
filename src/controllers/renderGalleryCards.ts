import { Course } from '@models/Course';
import { GalleryCard } from '@components/GalleryCard';

export function renderGalleryCards(courses: Course[], append: boolean = false) {
  const courseCardsWrap = document.getElementById('galleryCards');

  if (courseCardsWrap) {
    if (!append) {
      courseCardsWrap.innerHTML = '';
    }

    courses.forEach((course) => {
      const courseCard = GalleryCard(course);
      courseCardsWrap?.append(courseCard);
    });

    courseCardsWrap.addEventListener('mouseover', (e) => {
      if ((e.target as HTMLElement).closest('.course-info__link')) {
        const image = (e.target as HTMLImageElement).closest('.gallery__card')?.querySelector('.ratio-box img');
        const imgElement = image as HTMLImageElement | null;
        if (imgElement) {
          imgElement.style.transform = 'scale(1.05)';
        }
      }
    });

    courseCardsWrap.addEventListener('mouseout', (e) => {
      if ((e.target as HTMLElement).closest('.course-info__link')) {
        const image = (e.target as HTMLImageElement).closest('.gallery__card')?.querySelector('.ratio-box img');
        const imgElement = image as HTMLImageElement | null;
        if (imgElement) {
          imgElement.style.transform = 'scale(1)';
        }
      }
    });
  }
}
