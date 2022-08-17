import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAİL_FIELD from '@salesforce/schema/Contact.Email';
import { reduceErrors } from 'c/ldsUtils';

const columns = [
    { label: 'FirstName', fieldName: FIRST_NAME_FIELD },
    { label: 'LastName', fieldName: LAST_NAME_FIELD },
    { label: 'Email', fieldName: EMAİL_FIELD }
    
];


export default class ContactList extends LightningElement {
    columns = columns;
    data = []
    @wire(getContacts)
    wiredData({ error, data }) {
      
        this.data = data;
    }
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }  
      
    
}