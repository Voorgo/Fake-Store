export const reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return { ...state, isOpen: true };
    case "close":
      return { ...state, isOpen: false };
    case "addItem":
      return { ...state, item: [...state.item, action.payload] };
    case "render":
      return { ...state, render: !state.render };
    default:
      return state;
  }
};
