# Quote-of-the-day
A simple quote of the day website for programmers in need of bit of motivation.

## Features

- Display a random programming quote.
- Copy the quote to the clipboard.
- Tweet the quote.

## Technologies Used

- HTML
- CSS
- JavaScript

## API Used
```
"https://programming-quotesapi.vercel.app/api/random"
```

## How to Use

1. Clone the repository to your local machine.
2. Open `index.html` in your web browser.
3. The quote of the day will be displayed automatically.
4. Click on "New Quote" to fetch a new quote.
5. Click on "Copy Quote" to copy the quote to the clipboard.
6. Click on "Tweet" to tweet the quote.

## Code Explanation

### HTML

The `index.html` file contains the structure of the web page, including a div for displaying the quote and author, and buttons for copying the quote, fetching a new quote, and tweeting the quote.

### CSS

The `style.css` file contains the styles for the web page. This includes styles for the quote box, buttons, and general layout.

### JavaScript

The `script.js` file contains the logic for interacting with the API and handling user interactions.

- `getQuote()`: An async function that fetches a random quote from the API and updates the HTML elements with the fetched quote and author.
- `tweetQuote()`: A function that opens a new window with the Twitter sharing URL, pre-filled with the current quote and author.
- `copyQuote()`: A function that copies the current quote and author to the clipboard and shows an alert message.
