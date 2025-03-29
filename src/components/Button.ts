export function Button(text: string, className: string, disabled = false) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `${className}`;
  button.textContent = text;
  if (disabled) button.setAttribute('disabled', '');
  return button;
}
