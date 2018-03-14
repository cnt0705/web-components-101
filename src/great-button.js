export default class GreatButton extends HTMLElement {
  static get template() {
    return `
      <style>
        .button {
          background-color: blue;
          color: white;
        }
      </style>
      <button class="button">
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
