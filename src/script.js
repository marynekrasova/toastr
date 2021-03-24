import Modal from "./modal.js";
import Toast from "./toast.js";
window.addEventListener("DOMContentLoaded", () => {
  const error = document.getElementById('error');
  const success = document.getElementById('success');
  const modalbtn = document.getElementById('modal');
  const modalbtn2 = document.getElementById('modal2');
  const message = document.querySelector('.message');


  const toast = new Toast(message);

  error.addEventListener('click', function () {
    toast.error();
    toast.show();
  });
  success.addEventListener('click', function () {
    toast.success();
    toast.show();
  });


  modalbtn.addEventListener('click', function () {
    const modalw = document.querySelector('.modalw');
    const modal = new Modal(modalw, {});
    modal.show();
  });

  modalbtn2.addEventListener('click', function () {
    const modalw = document.querySelector('.modalw');
    const modal2 = new Modal(modalw, {
    "header": "Please, login",
    "fields": [
      {
        "type": "input",
        "required": "true",
        "lable": "Name"
      }, {
        "type": "input",
        "required": "true",
        "lable": "Password"
      }
    ]
  });
    modal2.show();
  });
});







