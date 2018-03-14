export default class NiceButton extends HTMLElement {
  // use to access and call functions on HTMLElement
  constructor() {
    super();
  }

  // Invoked when the custom element is first connected to the document's DOM
  connectedCallback() {
    this.innerHTML = `
      <button class="button">Nice button</button>
    `;
  }
}
