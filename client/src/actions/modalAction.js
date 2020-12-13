export function openModal(tabValue = 0) {
  return {
    type: "OPEN_MODAL",
    payload: {
      tabValue,
    },
  };
}

export function closeModal() {
  return {
    type: "CLOSE_MODAL",
  };
}
