export default class GreatButton extends HTMLElement {
  static get template() {
    return `
      <style>
        button {
          display: block;
          padding: 24px;
          border: #333 2px dotted;
          background-color: #d1ede8;
          cursor: pointer;
        }
      </style>
      <button>
        <slot></slot>
      </button>
    `
  }

  constructor() {
    super();
  }

  connectedCallback() {
    // Attaches a shadow DOM tree to the specified element
    this.attachShadow({
      mode: 'open'
    }).innerHTML = GreatButton.template;
  }
}
