import CommandeComponent from "../components/CommandeComponent.js";
import FooterComponent from "../components/FooterComponent.js";

export default class CommandeScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <commande-component></commande-component>
        <footer-component></footer-component>
        `;
    }
}
customElements.define("commande-screen", CommandeScreen);