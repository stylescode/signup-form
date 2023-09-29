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
    submitBtn.setAttribute('disabled', 'disabled');
  } else {
    result.textContent = '';
    pass1.classList.remove('redborder');
    pass2.classList.remove('redborder');
    submitBtn.removeAttribute('disabled');
  }
}

pass1.addEventListener('keyup', () => {
  if (pass2.value !== '') {
    checkPassword();
  }
});

pass2.addEventListener('keyup', checkPassword);