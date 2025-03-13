class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    async connectedCallback() {
      try {
        const response = await fetch("components/header.html");
        if (!response.ok) throw new Error("Header not found");
        this.innerHTML = await response.text();
      } catch (error) {
        console.error("Error loading header:", error);
      }
    }
  }
  
  customElements.define("header-component", Header);
  