export default class NiceButton extends HTMLElement {
  static get template() {
    return `
      <style>
        button {
          background-color: black;
        }
      </style>
      <button>
        <slot></slot>
      </button>
    `;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    }).innerHTML = NiceButton.template;
  }
};
