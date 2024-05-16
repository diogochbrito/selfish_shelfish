export default class ContactMessage{

    //these lines declare four instance variables (id, nom, email, and message) for instances of the ContactMessage class. They are initially undefined.
    id;
    nom;
    email;
    message;
    // isRead;

    //declares a static class variable nextId and initializes it to 0. Static variables are shared among all instances of the class.
    static nextId = 0;

    //starts the constructor method for the ContactMessage class, which takes an object props as a parameter.
    constructor(props){

        //this line uses destructuring assignment to extract properties id, nom, email, and message from the props object.
        const {id, nom, email, message} = props;

        //assigns the value of id from props to the instance variable id. If id is not provided (i.e., it's falsy), it assigns the next available id using the static variable nextId and then increments it.
        this.id = id || ++ContactMessage.nextId;

        //these lines simply assign the values of nom, email, and message from props to their respective instance variables.
        this.nom = nom;
        this.email = email;
        this.message = message;
    }
}