export function CourseDetailsInfo(addInfo: string) {
  const detailsInfo = document.createElement('article');
  detailsInfo.classList.add('details-info');
  const detailsInfoContent = document.createElement('div');
  detailsInfoContent.classList.add('course__details-info', 'details-info__container');
  const addInfoTitle = document.createElement('h3');
  addInfoTitle.innerHTML = 'Course <span>Details</span>';
  const addInfoText = document.createElement('p');
  addInfoText.textContent = addInfo;

  detailsInfo.append(detailsInfoContent);
  detailsInfoContent.append(addInfoTitle);
  detailsInfoContent.append(addInfoText);

  return detailsInfo;
}
