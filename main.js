const comingSoonBtn = document.querySelector('.coming-soon-btn');
let emailInput = document.querySelector('.email-input');
const notification = document.querySelector('.notification');
const formControl = document.querySelector('.form-control');

comingSoonBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let emailInputVal = emailInput.value;

  if (emailInputVal === '') {
    formControl.classList.add('error');
    emailInputVal == '';
    notification.innerHTML = 'Email cannot be empty';
  } else if (!isEmail(emailInputVal)) {
    formControl.classList.add('error');
    emailInput.style.color = 'var(--neutral-darkGrayishRed)';
    notification.innerHTML = 'Please provide a valid email';
  } else {
    formControl.classList.remove('error');
  }
});

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

window.onload = () => {
  emailInput.value = '';
};
