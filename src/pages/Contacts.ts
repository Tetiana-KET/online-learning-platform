export function Contacts() {
  const contactsPage = document.createElement('div');
  contactsPage.classList.add('page-wrap');
  contactsPage.id = 'contactsPage';

  contactsPage.innerHTML = `<article class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title">We’re <span>Here</span> to Help</h2>
      <div class="contacts__info-wrap">
        <div class="contacts__info info">
          <h4 class="info__title">
           <span>We’re here to help!</span> Feel free to reach out to us with any questions, feedback, or support inquiries.
          </h4>
          <div class="info__text-wrap">
            <p class="info__text">Please call: <a href="tel:+380501111111" class="tel">+38 050 111 11 11</a></p>

            <p class="info__text">
              For questions and suggestions:
              <a class="contact-link" href="mailto:support@youreducationplatform.com"
                >support@youreducationplatform.com</a
              >
            </p>
            <p class="info__text">
              Office Address:
              <a class="contact-link" target="_blank" href="https://maps.app.goo.gl/fVvTKABoesBTLYYo7"
                >Lavrska Street, 27, Kyiv, 02000</a
              >
            </p>
          </div>
        </div>
        <div class="contacts__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162757.83675629838!2d30.36788557215632!3d50.40213793557629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf76e65d4dad%3A0x247b398f405dff8f!2z0KDQvtC00LjQvdCwLdCc0LDRgtGM!5e0!3m2!1sru!2sua!4v1743415770926!5m2!1sru!2sua"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </article>
  <section class="about" id="about">
    <div class="about__container">
      <h2 class="about__title">About <span>Us</span></h2>

      <div class="about__content">
        <div class="about__img-wrap">
          <picture>
            <source srcset="/assets/images/about.webp" type="image/webp" />
            <img
              width="600"
              height="450"
              loading="lazy"
              src="/assets/images/default-img.png"
              alt="about us section image"
            />
          </picture>
        </div>
        <div class="about__text">
          <div class="about__description">
            <h3 class="about__description-title title">
              Welcome to our platform – Your <span>partner</span> in online education
            </h3>
            <div class="about__description-text">
              <p>
                <span>We believe</span> in making quality education accessible and engaging for everyone. Whether you’re looking to
                develop new skills, advance your career, or simply explore new fields, we offer a wide range of
                courses designed to fit your needs. 
              </p>
              <p>
                <span>Our platform</span> is designed to provide an immersive learning
                experience, featuring expert instructors, interactive content, and a community of learners from around
                the world. We are committed to delivering top-quality educational materials that equip you with the
                tools and knowledge to succeed in today’s fast-paced world.
              </p>
            </div>
          </div>
          <div class="about__progress-wrap">
            <div class="about__progress">
              <h4 class="about__progress-count title">5+</h4>
              <p class="about__progress-text">years on the educational market</p>
            </div>
            <div class="about__progress">
              <h4 class="about__progress-count title">1000+</h4>
              <p class="about__progress-text">successful graduates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  return contactsPage;
}
