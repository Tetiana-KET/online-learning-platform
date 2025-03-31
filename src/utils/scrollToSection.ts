export function scrollToSection(route: string) {
  const sectionId = route.split('#')[1];
  if (sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
