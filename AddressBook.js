class Contact {
  constructor(firstName, lastName, city, phoneNumber) {
    const nameRegex = /^[A-Z][a-z]{2,}$/; // Regex for first name and last name
    if (!nameRegex.test(firstName)) {
      throw new Error('First name should start with a capital letter and should have at least 3 characters');
    }
    if (!nameRegex.test(lastName)) {
      throw new Error('Last name should start with a capital letter and should have at least 3 characters');
    }
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
