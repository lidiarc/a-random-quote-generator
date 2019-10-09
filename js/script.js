/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

let quotes = [
  { quote: "Everything about you reminds me of you. Except you", source: "Groucho Marx", citation: "A Night at the Opera", year: 1935},
  { quote: "In the end, it’s not the years in your life that count. It’s the life in your years", source: "Abraham Lincoln"},
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall", source: "Nelson Mandela"},
  { quote: "The future belongs to those who believe in the beauty of their dreams", source: "Eleanor Roosevelt"},
  { quote: "Madness is doing the same thing over and over again hoping to get different results", source: "Albert Einstein"}
];


/***
  I create the `getRandomQuote` function that generate a random number to return a random quote object from the quotes array.
***/
/***
  I have looked for answers in:
  //https://stackoverflow.com/questions/17196453/javascript-random-number-function-undefined
***/

function getRandomQuote() {
  // generate a random number between 0 and the last index in the array parameter
  var longitudQuotes = quotes.length;
  var randomNumber = Math.floor(Math.random() * longitudQuotes);
    return quotes[randomNumber];
}
 
/***
  I create the `printQuote` function that 
  I have created the `printQuote` function to print the 'quotes' randomly on the screen each time the button is pressed.
  First we call the 'getRandomNumber' function.
  Then we generate the string with the properties that exist in all 'quotes'.
  Then we check if the 'quotes' contains the property 'citation' and 'year' and finally we return the string.
***/
/***
  I have looked for answers in:
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/hasOwnProperty
  //https://es.stackoverflow.com/questions/64393/c%C3%B3mo-validar-en-javascript-si-un-objeto-tiene-una-propiedad/64400
  //https://es.switch-case.com/52258124
  //https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
***/

function printQuote() {
    var newNumber = getRandomQuote();
    var miString = ' ';
    
    miString += '<p class="quote">' + newNumber.quote + '</p>';
    miString += '<p class="source">' + newNumber.source;
    
    if (newNumber.citation) {
        miString += '<span class="citation">' + newNumber.citation + '</span>';
        }
        
    if (newNumber.year) {
        miString += '<span class="year">' + newNumber.year + '</span>';
        }
    
    miString += '</p>';
    
    return  document.getElementById("quote-box").innerHTML = miString;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);