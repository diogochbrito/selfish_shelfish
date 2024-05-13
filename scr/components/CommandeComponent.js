import CommandeScreen from "scr\screens\CommandeScreen.js";
import FooterComponent from "../components/FooterComponent.js";
export default class CommandeComponent extends HTMLElement {

  constructor() {
    super();
    this.innerHTML = this.render();
    this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
    // this.querySelector("form").onsubmit = this.validateEmailInput;


  }
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.target));
    console.log(entries);
    // const account = new Account(entries);


    let isValide = true;

    if (!this.emailRegex.test(entries.Email)) {
      e.target.querySelector("#emailFeedback").innerHTML = `<span class="w3-text-green">Le email est au bon format</span>`;
      isValide = false;
    } else {
      e.target.querySelector("#emailFeedback").innerHTML = `<span class="w3-text-green">Le email est au bon format</span>`;



      // if(account.hasValidData()){
      //     //envoi des données vers le backend
      // }
      console.log(isValide);

    }
    render()
    {
      return `
    
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
          <strong>Reserve</strong> Place an order
        </p>
        <form novalidate action="/action_page.php" target="_blank">
          <p>
            <input
              class="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Name"
              required
              name="Name"
            />
          </p>
          <p>
            <input
              class="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Address"
              required
              name="address"
            />
          </p>
          <p>
          <input
            class="w3-input w3-padding-16 w3-border"
            type="number"
            placeholder="Telephone"
            required
            name="Telephone"
          />
        </p>
      
          <p>
          <input class= "w3-input w3-padding-16 w3-border" type="email" class="form-control form-control-sm" name="email" id="email" oninput="validateEmailInput()
          placeholder="name@example.com" required>
          <span id="emailFeedback" style="color: red;"></span>
          
          </p>
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
        `;
    }
  }
}
customElements.define("commande-component", CommandeComponent);