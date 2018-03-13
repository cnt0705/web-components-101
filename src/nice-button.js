export default class NiceButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <button>Nice button</button>
    `;
  }
}
