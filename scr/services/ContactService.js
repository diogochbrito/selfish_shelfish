import ContactMessage from "../models/ContactMessage.js";

export default class ContactService{

    data = [];

    constructor(){
        if(localStorage.getItem('messageList')){
            this.data = JSON.parse(localStorage.getItem('messageList')).map(obj => {
                return new ContactMessage(obj)
            });
        }
    }

    create(entries){
        const message = new ContactMessage(entries);
        this.data.push(message);
        localStorage.setItem('messageList', JSON.stringify(this.data));
    }

    read(){

    }

    update(json){

    }

    delete(json){

    }

}