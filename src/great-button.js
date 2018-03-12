export default class GreatButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <button>Great Button</button>
    `;
  }
}
