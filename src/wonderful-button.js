export default class WonderfulButton extends HTMLElement {
  static get template() {
    return `
      <style>
        button {
          display: block;
          padding: 16px;
          border: none;
          border-radius: 5px;
          background-color: #352d39;
          color: #fff;
          font-size: 2.0rem;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.8;
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
