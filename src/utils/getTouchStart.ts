export function getTouchX(e: TouchEvent) {
  return Math.floor(e.changedTouches[0].clientX);
}
