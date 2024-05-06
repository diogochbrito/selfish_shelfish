import HeaderComponent from "../components/HeaderComponent.js";
import FooterComponent from "../components/FooterComponent.js";

export default class HomeScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <header-component></header-component>
        <footer-component></footer-component>
      
        `;
    }
}
customElements.define("home-screen", HomeScreen);
