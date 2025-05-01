import './reset.css';
import './styles.css';

import useAutoplay from './hooks/useAutoplay';
import useIndex from './hooks/useIndex';
import createCarouselElement from './createCarouselElement';
import deepMerge from './helpers/deepMerge';

function createCarousel(parent, images = [], options = {}) {
  const defaultSettings = {
    autoplay: {
      enabled: true,
      interval: 5000,
    },
    aspectRatio: '3 / 2',
  };
  const { autoplay, aspectRatio } = deepMerge(defaultSettings, options);

  parent.appendChild(
    createCarouselElement(
      images,
      { '--numberOfSlides': images.length },
      aspectRatio
    )
  );

  const slides = document.querySelectorAll('.slide');
  const track = document.querySelector('.track');
  const dots = document.querySelectorAll('.dot');
  const { getCurrentIndex, setCurrentIndex, increment, decrement } = useIndex(
    slides.length - 1
  );
  const restartAutoplay = autoplay.enabled
    ? useAutoplay(handleNext, autoplay.interval)
    : (fn) => fn();

  const previousButton = document.querySelector('.previous');
  const nextButton = document.querySelector('.next');

  previousButton.addEventListener('click', () => restartAutoplay(handlePrev));
  nextButton.addEventListener('click', () => restartAutoplay(handleNext));
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () =>
      restartAutoplay(() => handleNavigation(index))
    );
  });

  function handleNavigation(index) {
    setCurrentIndex(index);
    updateTrackPosition();
  }

  function handlePrev() {
    decrement();
    updateTrackPosition();
  }

  function handleNext() {
    increment();
    updateTrackPosition();
  }

  function updateNavigation(index) {
    dots.forEach((dot) => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function updateTrackPosition() {
    const currentIndex = getCurrentIndex();
    const slideWidth = slides[0].offsetWidth;
    const offset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
    updateNavigation(currentIndex);
  }
}

export default createCarousel;
