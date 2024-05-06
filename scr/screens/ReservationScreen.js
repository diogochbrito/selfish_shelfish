import ReservationComponent from "../components/ReservationComponent.js";
import FooterComponent from "../components/FooterComponent.js";

export default class ReservationScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `
        <reservation-component></reservation-component>
        <footer-component></footer-component>
        `;
    }
}
customElements.define("reservation-screen", ReservationScreen);