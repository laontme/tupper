function toast(message, color) {
  const toastElement = $('#toast');
  const toastBs = bootstrap.Toast(toastElement[0]);
  toastElement.removeClass('bg-warning');
  toastElement.removeClass('bg-danger');
  toastElement.removeClass('bg-success');
  toastElement('.toast-body').text('');

  toastElement.addClass(`bg-${color}`);
  toastElement('.toast-body').text(message);

  toastBs.show();
}
