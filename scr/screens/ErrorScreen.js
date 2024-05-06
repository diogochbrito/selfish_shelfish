export default class ErrorScreen extends HTMLElement{

    constructor(){
        super();
        this.innerHTML = this.render();
    }

    render(){
        return `

        `;
    }
}
customElements.define("error-screen", ErrorScreen);