function listenAndForget(target, eventType, callback) {
  target.addEventListener(eventType, callback);

  return () => {
    target.removeEventListener(eventType, callback);
  };
}

export default listenAndForget;
