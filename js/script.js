/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

/***
 * Created array and put
 * objects which included the quotes,
 * source, citation, and year as 
 * properties of the object
 */

const quotes = [
  {quote: "The unexamined life is not worth living.",
  source: "Socrates"},
  {quote: "The only thing we have to fear is fear itself.",
  source: "Franklin D. Roosevelt"},
  {quote: "If you want something said, ask a man; if you want something done, ask a woman.",
  source: "Margaret Thatcher"},
  {quote: "To err is human; to forgive, divine.",
  source: "Alexander Pope"},
  {quote: "It is not the critic who counts: not the man who points out how the strong man stumbles or where the doer of deeds could have done better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood, who strives valiantly, who errs and comes up short again and again, because there is no effort without error or shortcoming, but who knows the great enthusiasms, the great devotions, who spends himself for a worthy cause; who, at the best, knows, in the end, the triumph of high achievement, and who, at the worst, if he fails, at least he fails while daring greatly, so that his place shall never be with those cold and timid souls who knew neither victory nor defeat.",
  source: "Theodore Roosevelt",
  citation: `"Citizenship in a Republic"`,
  year: 1910, 
 location: "Speech at the Sorbonne, Paris"}
]


/***
 * `getRandomQuote` function
***/


/***
 * Created a random number generator 
 * by using Math.random to create a random decimal
 * between 0 and 1, excluding 1, 
 * then multilplied that by the length of the quote array.
 * Finally, the Math.floor of the number was taken to
 * make it whole number
 */

/***
 * use the randomly generated number 
 * in the index of quotes array to 
 * retrieve a random quote object
 */

/***
 * return that random quote object
 */

function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const ranNum = Math.floor(Math.random() * quotes.length) 
  
  
  
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  const ranObj = quotes[ranNum]


  // 3. Return the variable storing the random quote object
  return ranObj
}


/***
 * `printQuote` function
***/

/***
 * call the getRandomQuote object and 
 * assign the return objebt to randomQuote 
 * variable
 */

/*** create a html variable and
 * assign it the corresponding 
 * html and CSS tags, inserting the correct
 * properties from randomQuote object as variables
 */

/*** three conditional statements to add lines 
 * to html to display if quotes include 
 * citation, location, and year followed by
 * the closing paragraph tag - relevent
 * html and CSS tags applied
 */

/*** set final HTML to replace the existing
 * HTML displayed in the 'quote-box' element
 */

/*** log to console the randomQuote object,
 * the source, and the completed html variable
 */

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  const randomQuote = getRandomQuote()

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  var html = `<p class="quote">${randomQuote.quote}</p>
 <p class="source">${randomQuote.source}`

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  if (randomQuote.citation){
    html += `<span class="citation">${randomQuote.citation}</span>`;
 }

// Added if statement to include title
if (randomQuote.location){
  html += `<span class="citation">${randomQuote.location}</span>`
 }

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  if (randomQuote.year) {
  html += `<span class="year">${randomQuote.year}</span>`
 }

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
  html += `</p>`

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  document.getElementById('quote-box').innerHTML = html; 

  console.log(randomQuote)
  console.log(randomQuote.source)
  console.log(html)
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

/*** the element with id 'load-quote' is set to run when
it is clicked and it calls the printQuote funtion
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

window.setInterval(printQuote, 5000)
