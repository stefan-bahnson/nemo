export default function messages(state = {}, action = {}) {
  switch (action.type) {
    case 'SET_DURATION':
      return [
        {
          timeLeft
        }
      ];
    default:
      return state;
  }
}