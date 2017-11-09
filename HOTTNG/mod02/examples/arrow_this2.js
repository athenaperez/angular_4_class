"use strict"

const dept = {
               members: ['Sandra', 'Erica', 'Colleen'],
               deptName: 'Human Resources',
               deptSummary(){
                 return this.members.map((member) => {
                      return `${member} works in ${this.deptName}`;
                 });
               }
};

console.log(dept.deptSummary());
