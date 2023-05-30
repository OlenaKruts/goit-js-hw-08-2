import throttle from 'lodash.throttle';
import Notiflix from 'notiflix';

const inputForm = document.querySelector('form');
const submitForm = inputForm.querySelector('button');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const emailField = inputForm.elements.email;
const messageField = inputForm.elements.message;

inputForm.addEventListener('input', throttle(saveFeedbackForm, 500));

function saveFeedbackForm(event) {
  const feedbackForm = {
    email: emailField.value,
    message: messageField.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedbackForm));
}

if (localStorage.length !== 0) {
  emailField.value = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).email;
  messageField.value = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY)
  ).message;
}

inputForm.addEventListener('submit', sumbitFeedbackForm);
function sumbitFeedbackForm(event) {
  event.preventDefault();
  if (emailField.value === '' || messageField.value === '') {
    Notiflix.Notify.failure('Please, fill all fields');
  } else {
    console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));

    localStorage.removeItem(LOCAL_STORAGE_KEY);
    event.currentTarget.reset();
  }
}
