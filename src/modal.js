import Base from "./base.js";
class Modal extends Base {
  constructor(elt, settings) {
    super(elt);
    if(this.elt.innerHTML) this.elt.innerHTML = "";
    this.__createContent(elt, settings);
    const closeX = this.elt.querySelector('.close');
    closeX.addEventListener('click', function () {
      if (event.target.className === 'close') {
        elt.classList.remove('open');
      }
    });

  }

  __createContent(elt, settings) {
    const modalContent = document.createElement("div");
    modalContent.classList.add('modalw_content');
    elt.appendChild(modalContent);

    const content = document.createElement("div");
    content.classList.add('text_modalw');
    modalContent.appendChild(content);
    const closeElm = document.createElement("div");
    closeElm.classList.add('close');
    closeElm.innerHTML = "X";
    modalContent.appendChild(closeElm);
    const modalButton = document.createElement("div");
    modalButton.classList.add('button1');
    modalContent.appendChild(modalButton);

    const modalSubmit = document.createElement("button");
    modalSubmit.classList.add('submit');
    modalSubmit.innerHTML = "Submit";
    modalButton.appendChild(modalSubmit);



    const modalCancel = document.createElement("button");
    modalCancel.classList.add('cancel');
    modalCancel.innerHTML = "Cancel";
    modalButton.appendChild(modalCancel);

    modalCancel.addEventListener('click', function () {
        if ( event.target.className === 'cancel') {
          modalContent.parentElement.classList.remove('open');
        }
      });

    if ( !settings.header) {

      const h2 = document.createElement("h2");
      h2.innerHTML = "HEADER";
      const textContent = document.createElement("p");
      textContent.innerHTML = "Do you really confirm the action?";
      content.appendChild(h2);
      content.appendChild(textContent);

      modalSubmit.addEventListener('click', function () {
        alert("Hello!");
      });
    }
    else {
      const h2 = document.createElement("h2");
      h2.innerHTML = settings.header;
      content.appendChild(h2);


      for(const field of settings.fields) {
        this.addRow(content, field);
      }
      modalSubmit.addEventListener('click', function () {
        console.log(document.getElementById("Name").value);
        console.log(document.getElementById("Password").value);
      });
    }
   }

  addRow(elt, field)
  {
    const elem = document.createElement(field.type);
    elem.setAttribute("placeholder", field.lable);
    elem.setAttribute("id", field.lable);
    elt.appendChild(elem);
  }

    show()
    {
      super.show();
    }

  }

export default Modal;