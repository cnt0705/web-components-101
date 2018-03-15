export default class WonderfulButton extends HTMLElement {
  static get template() {
    return `
      <style>
        button {
          background-color: green;
          color: white;
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
    this.attachShadow({
      mode: 'open'
    }).innerHTML = WonderfulButton.template;

    this.addEventListener('click', e => {
      alert('You did it!')
    });
  }
}
