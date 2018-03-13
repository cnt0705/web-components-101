export default class AmazingButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <button>Amazing Button</button>
    `;
  }
}
