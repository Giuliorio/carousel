import './reset.css';
import './styles.css';
import useIndex from './useIndex';

const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.track');
const { getCurrentIndex, setCurrentIndex, increment, decrement } = useIndex(
  slides.length - 1
);

const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

previousButton.addEventListener('click', handlePrev);
nextButton.addEventListener('click', handleNext);

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
