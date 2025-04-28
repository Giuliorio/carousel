import listenAndForget from '../helpers/listenAndForget';

function useAutoplay(repeatable = () => {}, interval = 5000) {
  let intervalID;

  function createInterval() {
    intervalID = setInterval(repeatable, interval);
  }

  function resetInterval() {
    clearInterval(intervalID);
    createInterval();
  }

  function restartAutoplay(callback) {
    callback();
    resetInterval();
  }

  const cleanup = listenAndForget(window, 'popstate', () => {
    clearInterval(intervalID);
    cleanup();
  });

  return restartAutoplay;
}

export default useAutoplay;
