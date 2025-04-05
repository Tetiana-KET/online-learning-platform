export function replaceSpaceWithDash(value: string) {
  return value.toLocaleLowerCase().replace(/\s+/g, '-');
}
