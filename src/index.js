import './reset.css';
import './styles.css';
import useIndex from './useIndex';

const slides = document.querySelectorAll('.slide');
const { getCurrentIndex, setCurrentIndex, increment, decrement } = useIndex(
  slides.length - 1
);
