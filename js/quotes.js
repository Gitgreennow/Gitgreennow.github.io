const quotes=[{quote:"Bond. James Bond",author:"James Bond",
},
    {quote:"A Martini. Shaken, Not Stirred.",author:"James Bond",
},
    {quote:"Well, I Like To Do Some Things The Old-Fashioned Way.",author:"James Bond",
},
    {quote:"Why Is It That People Who Can't Take Advice Always Insist On Giving It?",author:"James Bond",
},
    {quote:"You must be joking.",
    author:"James Bond",
},
    {quote:"Oh I'm sorry, that last hand nearly killed me.",author:"James Bond",
},
    {quote:"I've got a little itch, down there. Do you mind?",author:"James Bond",
},
    {quote:"Now the whole world's gonna know that you died scratching my balls!",author:"James Bond",
},
    {quote:"A gun and a radio...not exactly Christmas, is it?",author:"James Bond",
},
    {quote:"And youth is no guarantee of innovation.",author:"James Bond",
},
    {quote:"What a waste of good Scotch",author:"James Bond",
},
    {quote:"And don't forget my pathetic love of country.", author:"James Bond",
}
];

const quote= document.querySelector("#quote span:first-child");
const author= document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)]
console.log(todaysQuote)

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;