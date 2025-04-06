import { Categories } from './Categories';
import { DifficultyLevel } from './DifficultyLevel';

export interface Course {
  id: number;
  title: string;
  instructors: string[];
  difficultyLevel: DifficultyLevel;
  topics: string[];
  photos: string[];
  category: Categories;
  description: string;
  addInfo: string;
}
