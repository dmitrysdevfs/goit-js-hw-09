let formData = {
  email: '',
  message: '',
};

const feedbackFormEl = document.querySelector('.feedback-form');

const fillFormFields = () => {
  try {
    if (localStorage.length === 0) {
      return;
    }

    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    formData = formDataFromLS;

    for (const key in formDataFromLS) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  } catch (error) {
    console.log(error);
  }
};

fillFormFields();

const onFormFieldChange = event => {
  const {
    target: { name: fieldName, value: fieldValue },
  } = event;

  console.log(`${fieldName}: ${fieldValue}`);

  formData[fieldName] = fieldValue.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please fill in all fields');
    return;
  }

  console.log('Form data:', formData);

  formData = { email: '', message: '' };

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
