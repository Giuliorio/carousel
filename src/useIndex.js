function useIndex(max) {
  let currentIndex = 0;

  const getCurrentIndex = () => currentIndex;

  const setCurrentIndex = (newIndex) => {
    if (newIndex >= 0 && newIndex <= max) {
      currentIndex = newIndex;
    }
  };

  const increment = () => {
    if (currentIndex < max) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  };

  const decrement = () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = max;
    }
  };

  return {
    getCurrentIndex,
    setCurrentIndex,
    increment,
    decrement,
  };
}

export default useIndex;
