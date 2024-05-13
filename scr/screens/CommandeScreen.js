import FooterComponent from "../components/FooterComponent.js";

export default class CommandeScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
        this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
    }

    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    handleLoginFormSubmit = (e) => {
        e.preventDefault();
        const entries = Object.fromEntries(new FormData(e.target)); //gets all inputs from form

        let isValide = true;

        if(!this.emailRegex.test(entries.Email)){
        e.target.querySelector("#email_error").innerHTML = `<span class="w3-text-red">Le email n'est pas au bon format</span>`;
        isValide = false;
      }
      else {
        e.target.querySelector("#email_error").innerHTML = `<span class="w3-text-green">Le email est au bon format</span>`;
      }
      if(entries.Message.length < 1) {
        e.target.querySelector("#message_error").innerHTML = `<span class="w3-text-red">Veuillez inserez un message</span>`;
        isValide = false;
      }
      else {
        e.target.querySelector("#message_error").innerHTML = `<span class="w3-text-green">Le message est bon</span>`;
      }
      if(isValide){
        //envoie des données vers le back-end
        e.target.querySelector("#message_success").innerHTML = `<span class="w3-text-green">Données envoyées</span>`;
      }
      else {
        e.target.querySelector("#message_success").innerHTML = `<span class="w3-text-red">Données NON envoyées</span>`;
      }
      console.log(isValide);
    }



    render(){
        return `
        <commande-component></commande-component>


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
          <strong>Reserve</strong> a table, ask for today's special or just send
          us a message:
        </p>
        <form action="/action_page.php" target="_blank">
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
              type="number"
              placeholder="How many people"
              required
              name="People"
            />
          </p>
          <p>
            <input
              class="w3-input w3-padding-16 w3-border"
              type="datetime-local"
              placeholder="Date and time"
              required
              name="date"
              value="2020-11-16T20:00"
            />
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
              SEND MESSAGE
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