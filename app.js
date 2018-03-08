class niceButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <button>Really nice button</button>
    `;
  }
}

customElements.define('nice-button', niceButton);
