export default () => {
  const btn = document.getElementById('not-bad');
  // A new kind of node associated with elements
  const shadowRoot = btn.attachShadow({ mode: 'open' });
  shadowRoot.innerHTML = '<button>Not bad :/</button>';
};
