const feedbackFormEl = document.querySelector('.js-feedback-form');
let formData = { email: '', message: '' };

const onFormFieldInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

feedbackFormEl.addEventListener('input', onFormFieldInput);

const fillFormFields = () => {
  const formDataFromLs = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLs === null) {
    return;
  }
  formData = formDataFromLs;

  for (const key in formDataFromLs) {
    if (formDataFromLs.hasOwnProperty(key)) {
      feedbackFormEl.elements[key].value = formDataFromLs[key];
    }
  }
};
fillFormFields();

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  const email = formData.email.trim();
  const message = formData.message.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {
    email: '',
    message: '',
  };
};
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
