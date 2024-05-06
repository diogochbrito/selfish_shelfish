import App from "./App.js";
import HomeScreen from "./screens/HomeScreen.js";
import CarteScreen from "./screens/CarteScreen.js";
import CommandeScreen from "./screens/CommandeScreen.js";
import ReservationScreen from "./screens/ReservationScreen.js";
import ContactScreen from "./screens/ContactScreen.js";
import ErrorScreen from "./screens/ErrorScreen.js";

export default class Router {

    constructor() {
        window.onload = this.navigate;
        window.onpopstate = this.navigate;
        window.onclick = this.handleDataLinks;
    }

    handleDataLinks = (e) => {
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            history.pushState("", "", link.href);
            this.navigate();
        }
    }


    navigate = (e) => {
        const app = new App();
        let page = "";

        if (location.pathname == "/") {
            page = new HomeScreen();
        }
        else if (location.pathname == "/carte") {
            page = new CarteScreen();
        }
        else if (location.pathname == "/commande") {
            page = new CommandeScreen();
        }
        else if (location.pathname == "/reservation") {
            page = new ReservationScreen();
        }
        else if (location.pathname == "/contact") {
            page = new ContactScreen();
        }
        else {
            page = new ErrorScreen();
        }

        app.render(page);
    }
}