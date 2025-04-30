import './reset.css';
import './styles.css';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

import useAutoplay from './hooks/useAutoplay';
import useIndex from './hooks/useIndex';
import createCarouselElement from './createCarouselElement';
import deepMerge from './helpers/deepMerge';

const images = [
  {
    url: image1,
    alt: 'Mountaintop Temple',
  },
  {
    url: image2,
    alt: 'Beautiful pagoda in a Japanese style town',
  },
  {
    url: image3,
    alt: 'Japanese market at night in fall',
  },
];

const body = document.querySelector('body');

createCarousel(body, images, {});

function createCarousel(parent, images = [], options = {}) {
  const defaultSettings = {
    autoplay: {
      enabled: true,
      interval: 5000,
    },
  };

  const { autoplay, interval } = deepMerge(defaultSettings, options);

  parent.appendChild(createCarouselElement(images));

  const slides = document.querySelectorAll('.slide');
  const track = document.querySelector('.track');
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

  function handlePrev() {
    decrement();
    updateTrackPosition();
  }

  function handleNext() {
    increment();
    updateTrackPosition();
  }

  function updateTrackPosition() {
    const currentIndex = getCurrentIndex();
    const slideWidth = slides[0].offsetWidth;
    const offset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
  }
}
