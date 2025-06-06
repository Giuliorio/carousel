export function createElement(tag, options = {}) {
  const {
    className = '',
    textContent = '',
    innerHTML = '',
    attributes = {},
    properties = {},
    children = [],
    style = {},
  } = options;

  const element = document.createElement(tag);

  if (typeof className === 'string') {
    element.className = className;
  }
  if (Array.isArray(className)) {
    element.classList.add(...className);
  }

  element.textContent = textContent;
  element.innerHTML = innerHTML;

  Object.keys(attributes).forEach((attribute) => {
    element.setAttribute(attribute, attributes[attribute]);
  });

  Object.keys(properties).forEach((property) => {
    element.style.setProperty(property, properties[property]);
  });

  if (Object.keys(style).length > 0) {
    Object.assign(element.style, style);
  }

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
}
