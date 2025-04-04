class Footer extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const response = await fetch('/components/footer.html');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      this.innerHTML = data;
    } catch (error) {
      console.error('Error fetching the footer:', error);
      this.innerHTML = `
        
      `;
    }
  }
}

customElements.define('footer-component', Footer);
