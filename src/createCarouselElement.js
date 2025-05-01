import { createElement } from './helpers/createElement';

function createCarouselElement(images = [], properties) {
  const carousel = createElement('div', {
    className: 'carousel',
    properties,
    children: [createFrameElement(images)],
  });

  return carousel;
}

function createPreviousButtonElement() {
  const previousButton = createElement('button', {
    className: 'previous',
  });

  previousButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>';

  return previousButton;
}

function createNextButtonElement() {
  const nextButton = createElement('button', {
    className: 'next',
  });

  nextButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>';

  return nextButton;
}

function createFrameElement(images) {
  const frame = createElement('div', {
    className: 'frame',
    children: [
      createPreviousButtonElement(),
      createTrackElement(images),
      createNextButtonElement(),
    ],
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
