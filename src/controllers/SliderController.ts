import { SLIDES_GAP } from '@consts/SLIDES_GAP';
import { disableButton } from '@utils/disableButton';
import { enableButton } from '@utils/enableButton';
import { getTouchX } from '@utils/getTouchStart';

export class SliderController {
  private slider: HTMLElement;
  private sliderTrack: HTMLElement;
  private sliderItems: HTMLElement[];
  private paginationDots: HTMLElement[];
  private arrowLeft: HTMLElement;
  private arrowRight: HTMLElement;
  private position: number = 0;
  private dotIndex: number = 0;
  private translateX: number = 0;
  private width: number = 0;
  private progressIntervalId: number | undefined;
  private touchStartX: number | null = null;
  private touchEndX: number | null = null;
  private swipeDirection: number | null = null;

  constructor(sliderWrapId: string) {
    this.slider = document.getElementById(sliderWrapId)!;

    this.sliderTrack = this.slider.querySelector('#sliderTrack')!;
    this.sliderItems = Array.from(this.slider.querySelectorAll('.slider__item'));
    this.paginationDots = Array.from(document.querySelectorAll('.favorite__pagination-item'));
    this.arrowLeft = this.slider.querySelector('#arrow-left')!;
    this.arrowRight = this.slider.querySelector('#arrow-right')!;

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', this.init.bind(this));
    } else {
      this.init();
    }
  }

  public destroy() {
    this.arrowRight.removeEventListener('click', this.handleNextSlide);
    this.arrowLeft.removeEventListener('click', this.handlePrevSlide);
    this.sliderTrack.removeEventListener('mouseover', this.handleMouseOver);
    this.sliderTrack.removeEventListener('mouseleave', this.handleMouseLeave);
    this.sliderTrack.addEventListener('touchstart', this.handleTouchStart);
    this.sliderTrack.addEventListener('touchend', this.handleTouchEnd);
    window.removeEventListener('resize', this.handleResize);
    clearInterval(this.progressIntervalId!);
  }

  private init() {
    this.arrowRight.addEventListener('click', this.handleNextSlide);
    this.arrowLeft.addEventListener('click', this.handlePrevSlide);
    this.sliderTrack.addEventListener('mouseover', this.handleMouseOver);
    this.sliderTrack.addEventListener('mouseleave', this.handleMouseLeave);
    this.sliderTrack.addEventListener('touchstart', this.handleTouchStart);
    this.sliderTrack.addEventListener('touchend', this.handleTouchEnd);

    window.addEventListener('resize', this.handleResize);

    this.progressRun();
  }

  private handleNextSlide = () => {
    this.setNextSlide();
  };

  private handlePrevSlide = () => {
    this.setPrevSlide();
  };

  private handleMouseOver = () => {
    this.pauseProcess();
  };

  private handleMouseLeave = () => {
    this.resetProgress();
  };

  private handleResize = () => {
    if (!this.slider) return;
    this.width = this.slider.clientWidth;
    this.resetProgress();
  };

  private handleTouchStart = (e: TouchEvent) => {
    this.touchStartX = getTouchX(e);
    this.pauseProcess();
  };

  private handleTouchEnd = (e: TouchEvent) => {
    this.touchEndX = getTouchX(e);

    if (this.touchStartX && this.touchEndX) {
      this.swipeDirection = this.touchStartX - this.touchEndX;
      if (this.swipeDirection > 0) {
        this.setNextSlide();
      } else if (this.swipeDirection < 0) {
        this.setPrevSlide();
      }
      this.resetProgress();

      this.touchStartX = null;
      this.touchEndX = null;
      this.swipeDirection = null;
    }
  };

  private setActiveDot(dotIndex: number = 0) {
    clearInterval(this.progressIntervalId!);

    this.paginationDots.forEach((dot) => {
      dot.classList.remove('pagination__item_active');
      (dot.querySelector('.favorite__pagination-progress') as HTMLElement).style.width = '0%';
    });

    this.paginationDots[dotIndex].classList.add('pagination__item_active');
    this.resetProgress();
  }

  private setNextSlide() {
    disableButton(this.arrowRight);

    this.position = (this.position + 1) % this.sliderItems.length;
    this.dotIndex = this.position;

    this.moveSlider();
    this.setActiveDot(this.dotIndex);

    enableButton(this.arrowRight);
  }

  private setPrevSlide() {
    disableButton(this.arrowLeft);

    this.position = (this.position - 1 + this.sliderItems.length) % this.sliderItems.length;
    this.dotIndex = this.position;

    this.moveSlider();
    this.setActiveDot(this.dotIndex);

    enableButton(this.arrowLeft);
  }

  private moveSlider() {
    this.width = this.slider.clientWidth;

    const slideWidth = this.width + SLIDES_GAP;
    this.translateX = -this.position * slideWidth;
    this.sliderTrack.style.transform = `translateX(${this.translateX}px)`;
  }

  private progressRun(progressWidth = 0) {
    this.width = this.slider.clientWidth;
    const activeSliderDot = document.querySelector('.pagination__item_active');
    const paginationProgress = activeSliderDot?.querySelector('.favorite__pagination-progress') as HTMLElement;

    let paginationProgressWidth = progressWidth;

    this.progressIntervalId = setInterval(() => {
      if (paginationProgressWidth > 100) {
        clearInterval(this.progressIntervalId);
        paginationProgressWidth = 0;
        paginationProgress.style.width = paginationProgressWidth + 'px';
        this.setNextSlide();
      } else {
        paginationProgressWidth += 1;
        paginationProgress.style.width = paginationProgressWidth + '%';
      }
    }, 50);
  }

  private resetProgress() {
    clearInterval(this.progressIntervalId);
    const progress = document.querySelector(
      '.favorite__pagination-item.pagination__item_active>.favorite__pagination-progress',
    ) as HTMLElement;
    const progressWidth = parseInt(progress.style.width);
    this.progressRun(progressWidth);
  }

  private pauseProcess() {
    clearInterval(this.progressIntervalId);
  }
}
