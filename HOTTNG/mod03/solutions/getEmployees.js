"use strict"

let employees = [{name:'Colleen', title: 'Travel Coordinator'},
{name:'Erica', title: 'Office Manager'},
{name:'Stan', title: 'Logistics Manager'},
{name:'Jody', title: 'Web Designer'}
];

function *getEmployees(emps)
{
    yield* emps;
}


for(let e of getEmployees(employees))
{
  console.log(`${e.name} is the ${e.title}.`);

}
