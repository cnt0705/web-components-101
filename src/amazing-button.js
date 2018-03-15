export default class AmazingButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById('template');
    this.appendChild(template.content);
  }
}
