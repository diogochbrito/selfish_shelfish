import ContactComponent from "../components/ContactComponent.js";
import FooterComponent from "../components/FooterComponent.js";

export default class ContactScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <contact-component></contact-component>
        <footer-component></footer-component>
        `;
    }
}
customElements.define("contact-screen", ContactScreen);