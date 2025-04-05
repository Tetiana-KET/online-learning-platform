import { getRandomNum } from './getRandomNum';

export function getRandomItems<T>(items: T[], count: number) {
  const selectedIndexes = new Set<number>();
  while (selectedIndexes.size < count) {
    const randomIndex = getRandomNum(0, items.length);
    selectedIndexes.add(randomIndex);
  }

  return [...selectedIndexes].map((index) => items[index]);
}
