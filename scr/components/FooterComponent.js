export default class FooterComponent extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <!-- Footer -->
        <footer class="w3-center w3-black w3-padding-48 w3-xxlarge">
          <p>
            Powered by
            <a
              href="https://www.w3schools.com/w3css/default.asp"
              title="W3.CSS"
              target="_blank"
              class="w3-hover-text-green"
              >w3.css</a
            >
          </p>
        </footer>
        `;
    }
}
customElements.define("footer-component", FooterComponent);