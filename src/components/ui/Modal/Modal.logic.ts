// prevents calling dialog.showModal() when it is already visible
export const openModal = (dialog: HTMLDialogElement | null) => {
  if (dialog && !dialog.open) {
    dialog.showModal();
  }
};
export const closeModal = (dialog: HTMLDialogElement | null) => {
  dialog?.close();
};
