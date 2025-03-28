export function appendNodeToRoot(child: HTMLElement | string) {
  const appContent = document.getElementById('appContent');
  (appContent as HTMLElement).innerHTML = '';
  appContent?.append(child);
}
