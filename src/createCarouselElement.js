import { createElement } from './helpers/createElement';

function createCarouselElement(images = []) {
  const carousel = createElement('div', {
    className: 'carousel',
    children: [
      createPreviousButtonElement(),
      createFrameElement(images),
      createNextButtonElement(),
    ],
  });

  return carousel;
}

function createPreviousButtonElement() {
  const previousButton = createElement('button', {
    className: 'previous',
    textContent: '‹',
  });

  return previousButton;
}

function createNextButtonElement() {
  const nextButton = createElement('button', {
    className: 'next',
    textContent: '›',
  });

  return nextButton;
}

function createFrameElement(images) {
  const frame = createElement('div', {
    className: 'frame',
    children: [createTrackElement(images)],
  });

  return frame;
}

function createTrackElement(images) {
  const track = createElement('div', {
    className: 'track',
    children: [...images.map((image) => createSlideElement(image))],
  });

  return track;
}

function createSlideElement(image) {
  const slide = createElement('div', {
    className: 'slide',
    children: [
      createElement('img', {
        attributes: {
          src: image.url,
          alt: image.alt,
        },
      }),
    ],
  });

  return slide;
}

export default createCarouselElement;
