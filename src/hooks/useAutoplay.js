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

  const cleanup = listenAndForget(window, 'beforeunload', () => {
    clearInterval(intervalID);
    cleanup();
  });

  createInterval();

  return restartAutoplay;
}

export default useAutoplay;
