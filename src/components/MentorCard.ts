import { MentorInfoInterface } from '@models/MentorInfoInterface';
import ImageFigure from './ImageFigure';

export function MentorCard(mentorInfo: MentorInfoInterface) {
  const mentorCard = document.createElement('article');
  mentorCard.classList.add('mentor__card');
  const imgWrap = document.createElement('div');

  const figure = ImageFigure(imgWrap, mentorInfo.photo, `Course mentor ${mentorInfo.name} photo`);

  const figcaption = document.createElement('figcaption');

  const mentorName = document.createElement('h3');
  mentorName.classList.add('mentor__title');
  mentorName.textContent = `${mentorInfo.name}`;

  const mentorRole = document.createElement('h4');
  mentorRole.classList.add('mentor__role');
  mentorRole.textContent = `${mentorInfo.role}`;

  const mentorDetails = document.createElement('p');
  mentorDetails.classList.add('mentor__description');
  mentorDetails.textContent = `${mentorInfo.info}`;

  figcaption.append(mentorName, mentorRole, mentorDetails);
  figure.append(figcaption);
  mentorCard.append(figure);
  return mentorCard;
}
