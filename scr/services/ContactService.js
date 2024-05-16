import ContactMessage from "../models/ContactMessage.js";

export default class ContactService {

    data = [];

    constructor() {
        //checks if there is an item called 'messageList' stored in the browser's localStorage.
        if (localStorage.getItem('messageList')) {

            //if there is a 'messageList' stored in the localStorage, this line retrieves it, parses it from JSON format into a JavaScript object, and then uses the map function to transform each object in the array into a ContactMessage object.
            this.data = JSON.parse(localStorage.getItem('messageList')).map(obj => {

                //This line creates a new ContactMessage object for each object in the array.
                return new ContactMessage(obj)
            });
        }
    }

    create(entries) {
        //creates a new ContactMessage object using the entries parameter and assigns it to the variable message.
        const message = new ContactMessage(entries);

        // Check if the email already exists
        const emailExists = this.data.some(message => message.email === entries.email);

        const emailExistsMessage = document.getElementById('message_success');

        // Handle the case where the email already exists
        if (emailExists) {
            emailExistsMessage.innerHTML = `<span class="w3-text-red">L'address mail est déjà enregisté</span>`;
        }
        else {
            //adds the message object to the data array.
            this.data.push(message);

            //converts the data array to a JSON string using JSON.stringify() and stores it in the browser's localStorage with the key 'messageList'.
            localStorage.setItem('messageList', JSON.stringify(this.data));

            emailExistsMessage.innerHTML = `<span class="w3-text-green">Message envoyé</span>`;
        }

    }

    read() {

    }

    update(entries) {

    }

    delete(entries) {

    }
}