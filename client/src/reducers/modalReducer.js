const initialState = {
  isOpen: false,
  tabValue: 0,
};

function ModalReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isOpen: true, tabValue: action.payload.tabValue };
    case "CLOSE_MODAL":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export default ModalReducer;
