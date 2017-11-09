"use strict"

const book = {
  title: 'Green Eggs and Ham',
  author: 'Dr. Seuss',
  price: 7.99
};
//Function without destructuring
/*function bookSummary(book){

  console.log(`${book.title} ($${book.price}) was written by ${book.author}`);
}
*/
bookSummary(book);

//Function with destructuring

function bookSummary({title, price, author}){

  console.log(`${title} ($${price}) was written by ${author}`);
}
