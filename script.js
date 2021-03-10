(function () {
  const error = document.getElementById('error');
  const success = document.getElementById('success');
  const modalbtn = document.getElementById('modal');
  const message = document.querySelector('.message');
  const modalw = document.querySelector('.modalw');
  const messageContent = document.querySelector('.message_content');
  const h2 = document.querySelector('h2');
  const text = document.querySelector('p');
  const close = document.querySelector('.close');
  const cancel = document.querySelector('.cancel');
  const confirm = document.querySelector('.confirm');

  class Base {
    constructor(elt) {
      this.elt = elt;
    }

    show() {
      this.elt.classList.toggle('open');
    }

    hide() {
      this.elt.classList.toggle('open');
    }
  }

  class Modal extends Base {
    constructor(elt){
      super(elt);
    }

    show () {
      super.show();
      setTimeout(() => {
        super.hide();
      }, 5000)
    }

    content (){
      h2.innerHTML = "HEADER";
      text.innerHTML = "Do you really confirm the action?";
    }
  }

  class Toast extends Base {

      constructor(elt){
        super(elt);
      }

      show () {
        super.show();
        setTimeout(() => {
          super.hide();
        }, 5000)
      }

    error (){
      messageContent.style.backgroundColor = "red";
      h2.innerHTML = "ERROR";
      text.innerHTML = "Important message, describing the essence of the issue.";
    }
    success (){
      messageContent.style.backgroundColor = "green";
      h2.innerHTML = "SUCCESS";
      text.innerHTML = "Cheerful message, congratulating you with success.";
    }
  }
  const toast = new Toast(message);

  error.addEventListener('click', function () {
    toast.error();
    toast.show();
  });
  success.addEventListener('click', function () {
    toast.success();
    toast.show();
  });
  const modal = new Modal(modalw);
  modalbtn.addEventListener('click', function () {
    modal.content();
    modal.show();
  });


  close.addEventListener('click', function (e) {
    if ( event.target.className === 'close') {
      message.classList.remove('open');
      modalw.classList.remove('open');
    };
  });

  cancel.addEventListener('click', function (e) {
    if ( event.target.className === 'cancel') {
      modalw.classList.remove('open');
    };
  });
  confirm.addEventListener('click', function (e) {
   alert("confirmed!");
  });
}());

