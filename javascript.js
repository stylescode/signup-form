let pass1 = document.querySelector('#pass1');
let pass2 = document.querySelector('#pass2');
let result = document.querySelector('#pswdmatch');
let pswdsMatch = '';
let submitBtn = document.querySelector('#submitBtn');


// check password/confirm password are the same
function checkPassword() {
  if (pass1.value !== pass2.value) {
    result.textContent = '*Passwords do not match';
    pass1.classList.add('redborder');
    pass2.classList.add('redborder');
    disableSubmit();
  } else {
    result.textContent = '';
    pass1.classList.remove('redborder');
    pass2.classList.remove('redborder');
    submitBtn.removeAttribute('disabled');
  }
}

function disableSubmit() {
  let fNameValid = document.querySelector('#firstname:valid');
  let lNameValid = document.querySelector('#lastname:valid');
  let emailValid = document.querySelector('#email:valid');
  let phoneValid = document.querySelector('#phone:valid');
  let pass1Valid = document.querySelector('#pass1:valid');
  if (fNameValid && lNameValid && emailValid && phoneValid && pass1Valid) {
    submitBtn.setAttribute('disabled', 'disabled');
  }
}

pass1.addEventListener('keyup', () => {
  if (pass2.value !== '') {
    checkPassword();
  }
});

pass2.addEventListener('keyup', checkPassword);