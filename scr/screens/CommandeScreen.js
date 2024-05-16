// import CommandeComponent from "../components/CommandeComponent.js";
import FooterComponent from "../components/FooterComponent.js";
import CommandeService from "../Services/CommandeService.js"

export default class CommandeScreen extends HTMLElement {

  constructor() {
    super();
    this.innerHTML = this.render();
    this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
  }

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  nameRegex = /^[A-Za-z\s]+$/; // Regex for name validation
  phoneRegex = /^\d{10,15}$/; // Regex for phone number validation (10 to 15 digits)

  handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.target));
    console.log(entries);
    // const account = new Account(entries);


    let isValide = true;
    if (!this.nameRegex.test(entries.name)) {
      e.target.querySelector("#nameFeedback").innerHTML = `<span class="w3-text-red">Invalid name format</span>`;
      isValide = false;
    } else {
      e.target.querySelector("#nameFeedback").innerHTML = `<span class="w3-text-green">Name is valid</span>`;
    }
    if (!entries.address.trim()) {
      e.target.querySelector("#addressFeedback").innerHTML = `<span class="w3-text-red">Address is required</span>`;
      isValide = false;
    } else {
      e.target.querySelector("#addressFeedback").innerHTML = `<span class="w3-text-green">Address is valid</span>`;
    }

    if (!this.emailRegex.test(entries.email)) {
      e.target.querySelector("#emailFeedback").innerHTML = `<span class="w3-text-red">Invalid format</span>`;
      isValide = false;
    } else {
      e.target.querySelector("#emailFeedback").innerHTML = `<span class="w3-text-green">Le email est au bon format</span>`;


    }
    // Phone number validation
    if (!this.phoneRegex.test(entries.phone)) {
      e.target.querySelector("#phoneFeedback").innerHTML = `<span class="w3-text-red">Invalid phone number format</span>`;
      isValide = false;
    } else {
      e.target.querySelector("#phoneFeedback").innerHTML = `<span class="w3-text-green">Phone number is valid</span>`;
    }

    if (!entries.Message.trim()) {
      e.target.querySelector("#messageFeedback").innerHTML = `<span class="w3-text-red">Message is required</span>`;
      isValide = false;
    } else {
      e.target.querySelector("#messageFeedback").innerHTML = `<span class="w3-text-green">Message is valid</span>`;
    }
    if (isValide) {
      const commandeService = new CommandeService();
      commandeService.create(entries);
    }
  }
  render() {
    return `
        <!-- Contact -->
    <div
      class="w3-container w3-padding-64 w3-blue w3-xlarge"
    >
      <div class="w3-content">
        <h1 class="w3-center w3-jumbo" style="margin-bottom: 64px">Commande</h1>
        <p>
          Find us at some address at some place or call us at 05050515-122330
        </p>
        <p>
          <span class="w3-tag">FYI!</span> We offer full-service catering for
          any event, large or small. We understand your needs and we will cater
          the food to satisfy the biggerst criteria of them all, both look and
          taste.
        </p>
        <p class="w3-xxlarge">
          <strong>Place an order</strong> 
        </p>
        <form action="/action_page.php" target="_blank">
          <p>
            <input
              class="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Name"
              required
              name="name"
            />
          </p>
          <span id="nameFeedback"></span>
          <p>
            <input
              class="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="address"
              required
              name="address"
            />
          </p>
          <span id="addressFeedback"></span>
          <p>
            <input
              class="w3-input w3-padding-16 w3-border"
              type="email"
              placeholder="email"
              required
              name="email"
              
            />
          </p>
          <span id="emailFeedback"></span>
          <p>
          <input
            class="w3-input w3-padding-16 w3-border"
            type="tel"
            placeholder="Enter telephone number"
            required
            name="phone"
          />
        </p>
        <span id="phoneFeedback"></span>
          <p>
            <input
              class="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Message \ Special requirements"
              required
              name="Message"
            />
          </p>
          <p>
            <button class="w3-button w3-light-grey w3-block" type="submit">
             Confirm order
            </button>
          </p>
        </form>
      </div>
    </div>
        
        <footer-component></footer-component>
        `;
  }
}
customElements.define("commande-screen", CommandeScreen);