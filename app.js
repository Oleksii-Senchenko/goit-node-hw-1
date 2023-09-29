const contacts = require("./contacts");

const invokeAction = async({ action, id, name, email, phone })=>{
    switch (action) {
        case 'read':
            const responce =  await contacts.allContacts()
            console.log(responce);
            break;
    
        case 'findById':
            const contactId =  await contacts.getContactById(id)
            console.log(contactId);
            break;
    
        case 'delete':
            const deleteContact =  await contacts.removeContact(id)
            console.log(deleteContact);
            break;
        case 'add':
            const newConact =  await contacts.addContact(id, name, email, phone)
            console.log(newConact);
            break;
    
        default:
            console.warn("\x1B[31m Unknown action type!");
            break;
    }
};
invokeAction({
    action: 'add',
    name: 'Oleksii',
    email: 'bombombom',
    phone: '123123123'
});