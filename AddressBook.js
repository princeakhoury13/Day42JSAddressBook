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
    return this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }

   findContact(firstName, lastName) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].firstName === firstName && this.contacts[i].lastName === lastName) {
        return this.contacts[i];
      }
    }
    return null;
  }

  getNumberOfContacts() {
    return this.contacts.reduce((count, contact) => count + 1, 0);
  }

  getNumberOfContactsByCity() {
    const contactsByCity = {};
    this.contacts.forEach(contact => {
      if (contactsByCity[contact.city]) {
        contactsByCity[contact.city]++;
      } else {
        contactsByCity[contact.city] = 1;
      }
    });
    return contactsByCity;
  }
}


const john = new Contact('Prince', 'Praveen', 'New York', '8369315555');
const jane = new Contact('Tony', 'Stark', 'Los Angeles', '45454224945');
const person3 = new Contact('Doctor', 'Strange', 'New York', '454861213');
const person4 = new Contact('Bruce', 'Banner', 'California', '8369315555');
const book = new AddressBook();

book.addContact(john);
book.addContact(jane);
book.addContact(person3);
book.addContact(person4);

const contacts = book.getAllContacts();
contacts.forEach(contact => console.log(`${contact.firstName} ${contact.lastName} - ${contact.city}, ${contact.phoneNumber}`));