//importing faker api
import { faker } from '@faker-js/faker';
//importing file system
import fs from 'fs'
//create a function which will generate user from faker API
function generateUsers() {
let users = []
for (let id=1; id <= 100; id++) {

// old code 
// let firstName = faker.name.firstName();
// let lastName = faker.name.lastName();

// new code 
let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let email = faker.internet.email();
users.push({
"id": id,
"first_name": firstName,
"last_name": lastName,
"email": email
});
}
return { "data": users }
}
let dataObj = generateUsers();
fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));