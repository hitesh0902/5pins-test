export function openModalAction(tabValue = 0) {
  return {
    type: "OPEN_MODAL",
    payload: {
      tabValue,
    },
  };
}

export function closeModalAction() {
  return {
    type: "CLOSE_MODAL",
  };
}
