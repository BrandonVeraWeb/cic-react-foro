export const customForm = event => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  form.reset();

  return formData;
};
