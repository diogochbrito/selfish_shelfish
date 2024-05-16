import CommandeMessage from "../Models/CommandeMessage.js";

export default class CommandeService{

    data = [];

    constructor(){
        if(localStorage.getItem('messageList')){
            this.data = JSON.parse(localStorage.getItem('messageList')).map(obj => {
                return new CommandeMessage(obj)
            });
        }
    }

    create(entries){
        const message = new CommandeMessage(entries);
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