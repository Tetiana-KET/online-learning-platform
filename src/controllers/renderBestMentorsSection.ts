import { MentorCard } from '@components/MentorCard';
import { BEST_MENTORS_COUNT } from '@consts/BEST_MENTORS_COUNT';
import mentorsRaw from '@data/mentorsInfo.json';
import { MentorInfoInterface } from '@models/MentorInfoInterface';
import { getRandomItems } from '@utils/getRandomItems';

export function renderBestMentorsSection() {
  const mentorItems = document.getElementById('bestMentors');

  const mentors: MentorInfoInterface[] = mentorsRaw as MentorInfoInterface[];
  const mentorsItems = getRandomItems(mentors, BEST_MENTORS_COUNT);
  mentorsItems.forEach((mentor) => {
    const mentorCard = MentorCard(mentor);
    mentorItems?.append(mentorCard);
  });
}
