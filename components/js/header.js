class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        fetch('components/header.html')
        .then(response => {
            console.log('Fetch response:', response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            console.log('Fetched document content:', data);
            this.innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching header:', error);
        });
    }
}

customElements.define('header-component', Header);
