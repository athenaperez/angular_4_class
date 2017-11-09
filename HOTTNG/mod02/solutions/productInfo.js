"use strict"

var products = [
  {name: 'Chef Anton\'s Gumbo Mix', description: 'A prepared blend of ingredients used as the base for your favorite gumbo or may be used to create gravies for meats and vegetables.', price: 8.99},
  {name: 'Chef Anton\'s Jambalaya Mix', description: 'This famous Louisiana specialty can be prepared in less than 30 minutes for a terrific side dish to any meal.', price: 6.99},
  {name: 'Chef Anton\'s Cajun Bloody Mary Mix', description: 'Put a Cajun spicy twist to your next bloody mary with Chef Anton\'s Cajun Bloody Mary Mix. Our mix gives you the ingredients to a flavorful bloody mary, all in one bottle! Just shake and pour! Thanks to its full blend of Cajun spices, Chef Anton\'s Cajun Bloody Mary Mix is also great to add to your favorite cooking recipes.', price: 4.99}
];

/*
//Function expecting single object parameter
let showSummary = (prod) => `${prod.name} sells for ${prod.price}. ${prod.description}\n`;

*/

//Function using destructuring
let showSummary = ({name, description, price}) => `${name} sells for ${price}. ${description}\n`;

for(let p of products)
{
  console.log(showSummary1(p));
}
