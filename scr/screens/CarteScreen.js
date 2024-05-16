import FooterComponent from "../components/FooterComponent.js";

export default class CarteScreen extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
  }

  render() {
    return `
    <!-- Menu Container -->
    <div class="w3-container w3-black w3-padding-64 w3-xxlarge" id="menu">
      <div class="w3-content">
        <h1 class="w3-center w3-jumbo" style="margin-bottom: 64px">LE MENU</h1>
        <h1 class="w3-center w3-xxxlarge" style="margin-bottom: 64px">Entrées</h1>
  
        <div id="Starter" class="w3-container w3-white">
          <h1><b>Today's Soup</b> <span class="w3-tag w3-grey w3-round">Seasonal</span><span
              class="w3-right w3-tag w3-green w3-round">$5.50</span></h1>
          <div class="w3-row">
            <p class="w3-col s11 w3-text-grey" style="margin: 0px">Ask the waiter</p>
  
            <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
              placeholder="Qtte?" name="qqte" />
          </div>
          <hr>
  
          <h1><b>Bruschetta</b> <span class="w3-right w3-tag w3-green w3-round">$8.50</span></h1>
          <div class="w3-row">
            <p class="w3-col s11 w3-text-grey" style="margin: 0px">Bread with pesto, tomatoes, onion, garlic</p>
  
            <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
              placeholder="Qtte?" name="qqte" />
          </div>
  
          <hr>
  
          <h1><b>Garlic bread</b> <span class="w3-right w3-tag w3-green w3-round">$9.50</span></h1>
          <div class="w3-row">
            <p class="w3-col s11 w3-text-grey" style="margin: 0px">Grilled ciabatta, garlic butter, onions</p>
  
            <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
              placeholder="Qtte?" name="qqte" />
          </div>
          <hr>
  
          <h1><b>Tomozzarella</b> <span class="w3-right w3-tag w3-green w3-round  ">$10.50</span></h1>
          <div class="w3-row">
            <p class="w3-col s11 w3-text-grey w3-margin-bottom" style="margin: 0px">Tomatoes and mozzarella</p>
            <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
              placeholder="Qtte?" name="qqte" />
          </div>
        </div><br>
  
        <h1 class="w3-center w3-xxxlarge" style="margin-bottom: 64px">Pastas</h1>
  
        <div id="Pasta" class="w3-container w3-white">
  
          <h1>
            <b>Lasagna</b> <span class="w3-tag w3-grey w3-round">Popular</span> <span
              class="w3-right w3-tag w3-green w3-round">$13.50</span>
          </h1>
          <div class="w3-row">
            <p class="w3-col s11 w3-text-grey" style="margin: 0px">Special sauce, mozzarella, parmesan,
              ground beef</p>
  
            <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
              placeholder="Qtte?" name="qqte" />
          </div>
          <hr>
  
          <h1><b>Ravioli</b> <span class="w3-right w3-tag w3-green w3-round">$14.50</span></h1>
          <div class="w3-row">
            <p class="w3-col s11 w3-text-grey w3-margin-bottom" style="margin: 0px">Ravioli filled with cheese</p>
            <hr>
  
  
            <h1><b>Spaghetti Classica</b> <span class="w3-right w3-tag w3-green w3-round">$11.00</span></h1>
            <div class="w3-row">
              <p class="w3-col s11 w3-text-grey" style="margin: 0px">Fresh tomatoes, onions, ground beef
              </p>
  
              <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
                placeholder="Qtte?" name="qqte" />
            </div>
            <hr>
  
            <h1><b>Seafood pasta</b> <span class="w3-right w3-green w3-round">$25.50</span></h1>
            <div class="w3-row">
              <p class="w3-col s11 w3-text-grey" style="margin: 0px">Salmon, shrimp, lobster, garlic</p>
  
              <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
                placeholder="Qtte?" name="qqte" />
            </div>
            <br>
          </div>
        </div>
        <br>
  
        <h1 class="w3-center w3-xxxlarge" style="margin-bottom: 64px">Pizzas</h1>
  
  
        <div id="Pizza" class="w3-container w3-white">
  
          <h1>
            <b>Margherita</b>
            <span class="w3-right w3-green w3-round">$12.50</span>
          </h1>
  
          <div class="w3-row">
            <p class="w3-col s11 w3-text-grey" style="margin: 0px">
              Fresh tomatoes, fresh mozzarella, fresh basil
            </p>
  
            <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
              placeholder="Qtte?" name="qqte" />
          </div>
  
          <hr />
  
          <h1>
            <b>Formaggio</b>
            <span class="w3-right w3-tag w3-green w3-round">$15.50</span>
          </h1>
  
          <div class="w3-row">
            <p class="w3-col s11 w3-text-grey" style="margin: 0px">
              Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)
            </p>
  
            <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
              placeholder="Qtte?" name="qqte" />
          </div>
  
          <hr />
  
          <h1>
            <b>Chicken</b>
            <span class="w3-right w3-tag w3-green w3-round">$17.00</span>
          </h1>
  
          <div class="w3-row">
            <p class="w3-col s11 w3-text-grey" style="margin: 0px">
              Fresh tomatoes, mozzarella, chicken, onions
            </p>
  
            <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
              placeholder="Qtte?" name="qqte" />
          </div>
  
          <hr />
  
          <h1>
            <b>Pineapple'o'clock</b>
            <span class="w3-right w3-tag w3-green w3-round">$16.50</span>
          </h1>
  
          <div class="w3-row">
            <p class="w3-col s11 w3-text-grey" style="margin: 0px">
              Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil
            </p>
  
            <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
              placeholder="Qtte?" name="qqte" />
          </div>
  
          <hr />
  
          <h1>
            <b>Meat Town</b> <span class="w3-tag w3-red w3-round">Hot!</span><span
              class="w3-right w3-tag w3-green w3-round">$20.00</span>
          </h1>
  
          <div class="w3-row">
            <p class="w3-col s11 w3-text-grey" style="margin: 0px">
              Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef,
              chicken
            </p>
  
            <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
              placeholder="Qtte?" name="qqte" />
          </div>
  
          <hr />
  
          <h1>
            <b>Parma</b> <span class="w3-tag w3-grey w3-round">New</span><span
              class="w3-right w3-tag w3-green w3-round">$21.50</span>
          </h1>
  
          <div class="w3-row w3-margin-bottom">
            <p class="w3-col s11 w3-text-grey" style="margin: 0px">
              Fresh tomatoes, mozzarella, parma, bacon, fresh arugula
            </p>
  
            <input class=" w3-right w3-col s1 w3-input w3-xlarge w3-border w3-round" type="number" min="0"
              placeholder="Qtte?" name="qqte" />
          </div>
        </div>
        <button class="w3-button w3-right w3-red w3-xlarge w3-round w3-margin">Commander</button>
      </div>
  
    </div>

      <footer-component></footer-component>
        `;
  }
}
customElements.define("carte-screen", CarteScreen);
