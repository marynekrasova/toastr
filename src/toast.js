import Base from "./base.js";
class Toast extends Base {

  constructor(elt){
    super(elt);
    this.elt = elt;
    this.__createContent(this.elt);
    // const closeX = this.elt.querySelector('.close');
    // closeX.addEventListener('click', function () {
    //   if (event.target.className === 'close') {
    //     elt.classList.remove('open');
    //
    //   }
    // });

  }
  __createContent (){
    const img = document.createElement("div");
    img.classList.add('img_massage');
    this.elt.appendChild(img);
    const content = document.createElement("div");
    content.classList.add('text_message');
    this.elt.appendChild(content);
    const closeElm = document.createElement("div");
    closeElm.classList.add('close');
    closeElm.innerHTML = "X";
    this.elt.appendChild(closeElm);
    const h2 = document.createElement("h2");
    const textContent = document.createElement("p");
    content.appendChild(h2);
    content.appendChild(textContent);
  }

  show () {
    super.show();
    const timeout = setTimeout(() => {
      super.hide();
    }, 5000);
  const closeX = this.elt.querySelector('.close');
  closeX.addEventListener('click', function () {
    if (event.target.className === 'close') {
      closeX.parentElement.classList.remove('open');
      clearTimeout(timeout);
    }
  });
  }

  error (){
    this.elt.style.backgroundColor = "red";
    const h2 = this.elt.querySelector('h2');
    const text = this.elt.querySelector('p');
    h2.innerHTML = "ERROR";
    text.innerHTML = "Important message, describing the essence of the issue.";

  }
  success (){
    this.elt.style.backgroundColor = "green";
    const h2 = this.elt.querySelector('h2');
    const text = this.elt.querySelector('p');
    h2.innerHTML = "SUCCESS";
    text.innerHTML = "Cheerful message, congratulating you with success.";
  }
}
export default Toast;