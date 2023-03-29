class Contact {
  constructor(firstName, lastName, city, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.phoneNumber = phoneNumber;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  
  addContact(contact) {
    this.contacts.push(contact);
  }
  
  removeContact(index) {
    this.contacts.splice(index, 1);
  }
  
  getContact(index) {
    return this.contacts[index];
  }
  
  getAllContacts() {
    return this.contacts;
  }
}

// example usage
const john = new Contact('Prince', 'Praveen', 'New York', '8369315555');
const jane = new Contact('Tony', 'Stark', 'Los Angeles', '45454224945');
const book = new AddressBook();

book.addContact(john);
book.addContact(jane);

console.log(book.getAllContacts()); 
