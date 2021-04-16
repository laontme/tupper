$('[data-bs-toggle="tooltip"]').each((i, element) => {
  new bootstrap.Tooltip(element);
});

$('.toast').each((i, element) => {
  new bootstrap.Toast(element);
});