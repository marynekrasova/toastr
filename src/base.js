class Base {
  constructor(elt) {
    this.elt = elt;
  }

  show() {
    this.elt.classList.add('open');
  }

  hide() {
    this.elt.classList.remove('open');
  }
}
export default Base;