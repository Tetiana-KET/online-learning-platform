export function Home() {
  const favoriteSection = document.createElement('section');
  favoriteSection.classList.add('favorite');
  favoriteSection.innerHTML = `        
    <div class="favorite__container">
      <h2 class="favorite__title">Choose your <span>favorite</span> course</h2>
      <div class="favorite__slider-wrap">
        <div class="favorite__slider slider" id="favoriteSlider">
          <!-- LIST OF SLIDES IS DYNAMICALLY GENERATED -->
          <ul class="slider__items" id="sliderTrack"></ul>

          <div class="favorite__arrows arrow-left" id="arrow-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18.5 12H6M6 12L12 6M6 12L12 18"
                stroke="#403F3D"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div class="favorite__arrows arrow-right" id="arrow-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
                stroke="#403F3D"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="favorite__pagination">
        <!-- LIST OF pagination-items IS DYNAMICALLY GENERATED -->
        <ul class="favorite__pagination-items" id="favorite-pagination-items"></ul>
      </div>
    </div>`;
  return favoriteSection;
}
