export function Home() {
  const homePage = document.createElement('div');
  homePage.innerHTML = ` 
    <section class="welcome">
      <div class="welcome__container">
        <div class="welcome__content">
          <h1 class="welcome__title">
            Welcome to an <span>Inspiring </span> online Academy
          </h1>
          <p class="welcome__text">
            Your resource of choice for <span>exceptional</span> online education
          </p>
           <p class="welcome__text">
            Connecting people, growing together
          </p>
          <div class="welcome__button-wrap">
            <a href="#mentors" class="welcome__button" data-link>Best Mentors</a>
          </div>
        </div>
        <div class="welcome__img-wrap">
          <picture>
            <source srcset="/assets/images/school.webp" type="image/webp" />
            <img
              width="600"
              height="450"
              loading="lazy"
              src="/assets/images/default-img.png"
              alt="about us section image"
            />
          </picture>
        </div>
      </div>
		</section>
    <section class="favorite" >       
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
      </div>
    </section>
    <section class="best-mentors" id="mentors">
      <h2>Our <span>best mentors</span> are ready to help you</h2>
      <div class="best-mentors__container" id="bestMentors"></div>
    </section>`;
  return homePage;
}
