"use strict"
//Function with separate parameters
/*
function createUser(username, password, email, birthdate, city)
{
  console.log(`
User Name: ${username}
Password: ${password}
Email: ${email}
Birthdate: ${birthdate}
City: ${city}`)

}
*/
//Function using destructuring
function createUser({username, password, email, birthdate, city})
{
  console.log(`
User Name: ${username}
Password: ${password}
Email: ${email}
Birthdate: ${birthdate}
City: ${city}`)
*}



//createUser('Brady12', 'gopats', 'tbrady12@nepatriots.com', '8/3', 'Foxboro');

//createUser('tbrady12@nepatriots.com', '8/3', 'Brady12', 'gopats', 'Foxboro');

let user = {username:'Brady12', password:'gopats', email:'tbrady12@nepatriots.com', birthdate:'8/3', city:'Foxboro'};

createUser(user);
