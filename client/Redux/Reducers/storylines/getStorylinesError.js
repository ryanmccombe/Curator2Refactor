// TODO: Handle error state in UI
export default function (state, action) {
  console.error('XHR error getting storylines', action);
  return state;
};
