export const openModal = (dialog: HTMLDialogElement | null): void => {
  if (dialog && !dialog.open) {
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  }
};

export const closeModal = (dialog: HTMLDialogElement | null): void => {
  document.body.style.overflow = '';
  dialog?.close();
};
