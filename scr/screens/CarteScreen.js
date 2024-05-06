import FooterComponent from "../components/FooterComponent.js";

export default class CarteScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <!-- Menu Container -->
        <div class="w3-container w3-red w3-padding-64 w3-xxlarge" id="menu">
          <div class="w3-content">
            <h1 class="w3-center w3-jumbo" style="margin-bottom: 64px">THE MENU</h1>
    
            <div id="Pizza" class="w3-container w3-padding-32 w3-white">
              <h1>
                <b>Margherita</b>
                <span class="w3-right w3-tag w3-dark-grey w3-round">$12.50</span>
              </h1>
              <p class="w3-text-grey">
                Fresh tomatoes, fresh mozzarella, fresh basil
              </p>
              <hr />
    
              <h1>
                <b>Formaggio</b>
                <span class="w3-right w3-tag w3-dark-grey w3-round">$15.50</span>
              </h1>
              <p class="w3-text-grey">
                Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)
              </p>
              <hr />
    
              <h1>
                <b>Chicken</b>
                <span class="w3-right w3-tag w3-dark-grey w3-round">$17.00</span>
              </h1>
              <p class="w3-text-grey">
                Fresh tomatoes, mozzarella, chicken, onions
              </p>
              <hr />
    
              <h1>
                <b>Pineapple'o'clock</b>
                <span class="w3-right w3-tag w3-dark-grey w3-round">$16.50</span>
              </h1>
              <p class="w3-text-grey">
                Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil
              </p>
              <hr />
    
              <h1>
                <b>Meat Town</b> <span class="w3-tag w3-red w3-round">Hot!</span
                ><span class="w3-right w3-tag w3-dark-grey w3-round">$20.00</span>
              </h1>
              <p class="w3-text-grey">
                Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef,
                chicken
              </p>
              <hr />
    
              <h1>
                <b>Parma</b> <span class="w3-tag w3-grey w3-round">New</span
                ><span class="w3-right w3-tag w3-dark-grey w3-round">$21.50</span>
              </h1>
              <p class="w3-text-grey">
                Fresh tomatoes, mozzarella, parma, bacon, fresh arugula
              </p>
            </div>
          </div>
        </div>

      <footer-component></footer-component>
        `;
    }
}
customElements.define("carte-screen", CarteScreen);