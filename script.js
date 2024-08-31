const quote = document.getElementById('quote');
const author = document.getElementById('author');

const api_url="https://programming-quotesapi.vercel.app/api/random";
async function getQuote(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;             
}

getQuote(api_url);

function tweetQuote(){
    const quoteText = quote.innerText;
    const authorText = author.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${authorText}`;
    window.open(twitterUrl, '_blank');
}

function copyQuote(){
    const quoteText = quote.innerText;
    const authorText = author.innerText;
    const text = `${quoteText} - ${authorText}`;
    navigator.clipboard.writeText(text);
    alert('Quote copied to clipboard');
}