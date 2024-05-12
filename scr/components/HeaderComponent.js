export default class HeaderComponent extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <!-- Header with image -->
        <header class="w3-container w3-padding-64 w3-black w3-xlarge" id="home">
        <div class="w3-content">
        <h1 class="w3-center w3-jumbo" style="margin-bottom: 64px">SELFISH SHELLFISH <span class="w3-text-red"> - Les coquilles egoistes</span></h1>
        <p >
        Le restaurant a été fondé en blabla par M. Selfish en lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          <strong>Le Chef?</strong> M. Selfish lui-meme<img
            src="./scr/assets/images/chef.jpg"
            style="width: 150px"
            class="w3-circle w3-right"
            alt="Chef"
          />
        </p>
        <p>Nous sommes fiers de nos intérieurs.</p>
        <img
          src="./scr/assets/images/restaurant.jpg"
          style="width: 100%"
          class="w3-margin-top w3-margin-bottom"
          alt="Restaurant"
        />
        <h1><b>Horaires d'ouvertures</b></h1>

        <div class="w3-row">
          <div class="w3-col s6">
            <p>Mon & Tue CLOSED</p>
            <p>Wednesday 10.00 - 24.00</p>
            <p>Thursday 10:00 - 24:00</p>
          </div>
          <div class="w3-col s6">
            <p>Friday 10:00 - 12:00</p>
            <p>Saturday 10:00 - 23:00</p>
            <p>Sunday Closed</p>
          </div>
        </div>
      </div>
        </header>
        
        `;
    }
}
customElements.define("header-component", HeaderComponent);