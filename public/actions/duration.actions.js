export function setState(endTime) {
  return {
    type: 'SET_DURATION',
    timeLeft,
  };
}

export function setStateAsync(text) {
  return dispatch => {
    setTimeout(() => {
      dispatch(setState(text));
    }, 3000);
  };
}
