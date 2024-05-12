import FooterComponent from "../components/FooterComponent.js";

export default class ContactScreen extends HTMLElement{

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
        <!-- Contact -->
        <div
          class="w3-container w3-padding-64 w3-black w3-xlarge"
        >
          <div class="w3-content">
            <h1 class="w3-center w3-jumbo" style="margin-bottom: 64px">Contact</h1>
            <p>
              Trouvez-nous à une adresse ou appelez-nous au +33 1 23 34 45 56
            </p>
            <p>
              Nous proposons un service de restauration complet pour tout événement, grand ou petit. Nous comprenons vos besoins et nous répondrons la nourriture pour satisfaire les critères les plus importants de tous, à la fois en termes d'apparence et goût..
            </p>
            <p class="w3-xxlarge">
              <strong>Contactez-nous</strong> <span class="w3-text-red">demandez le plat du jour ou envoyez simplement un message</span>
            </p>
            <form action="/action_page.php" target="_blank" novalidate>
              <p>
                <input
                  class="w3-input w3-padding-16 w3-border"
                  type="text"
                  placeholder="Nom"
                  required
                  name="Nom"
                />
              </p>
              <p>
                <input
                  class="w3-input w3-padding-16 w3-border"
                  type="email"
                  placeholder="Email"
                  required
                  name="Email"
                />
              </p>
              <span id="email_error"></span>
    
              <p>
                <input
                  class="w3-input w3-padding-16 w3-border"
                  type="text"
                  placeholder="Message \ Special requirements"
                  required
                  name="Message"
                />
              </p>
              <span id="message_error"></span>
              <p>
                <button class="w3-button w3-light-grey w3-block" type="submit">
                  ENVOYER MESSAGE
                </button>
              </p>
              <span id="message_success"></span>
            </form>
          </div>
        </div>
        <footer-component></footer-component>
        `;
    }
}
customElements.define("contact-screen", ContactScreen);