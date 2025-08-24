export const openModal = (dialog: HTMLDialogElement | null): void => {
  if (dialog && !dialog.open) {
    dialog.showModal();
  }
};
export const closeModal = (dialog: HTMLDialogElement | null): void => {
  dialog?.close();
};
