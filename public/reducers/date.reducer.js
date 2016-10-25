export default function date(state = {}, action = {}) {
  switch (action.type) {
    case 'SET_DATE':
      console.log(action);
      return { 
        date: action.date,
        message: action.message
      };
    default:
      return state;
  }
}