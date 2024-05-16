export default class CommandeMessage{

    id;
    nom;
    email;
    message;
    // isRead;

    static nextId = 0;

    constructor(props){
        const {id, nom, email, message} = props;
        this.id = id || ++CommandeMessage.nextId;
        this.nom = nom;
        this.email = email;
        this.message = message;
    }


}