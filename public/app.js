const navX = document.querySelector('.navX')
const hamburger = document.getElementById('hamburger')
const navMain = document.querySelector('.active')
const current_rotation = 0;
const contactForm = document.querySelector('.contact-form');
let nameText = document.getElementById('nameText')
let emailText = document.getElementById('emailText')
const textField = document.getElementById('textField');


contactForm.addEventListener('submit', (e) => {

  e.preventDefault();

  let formData = {
    yourName: nameText.value,
    yourEmail: emailText.value,
    textField: textField.value
  }


  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/send_email');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function () {
  console.log(xhr.responseText);
  if(xhr.responseText == 'success') {
    alert('Email sent');
    nameText.value = '';
    emailText.value = '';
    textarea.value = '';
  } else {
    alert('wrong')
  }
}

  let newData = JSON.stringify(formData);
  console.log(newData);
  xhr.send(newData);
  


})


      textField.addEventListener("keyup", e => {

        textField.style.height = "10px";

        let scHeight = e.target.scrollHeight;
        textField.style.height = `${scHeight}px`;
      });

      window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
      }


hamburger.addEventListener('click', () => {
    navMain.style.visibility = "visible";	
})


navX.addEventListener('click', () => {
    navMain.style.visibility = "hidden";	
})

