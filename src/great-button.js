export default class GreatButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    }).innerHTML = `
    <button><slot></slot></button>
    `;
  }
}
