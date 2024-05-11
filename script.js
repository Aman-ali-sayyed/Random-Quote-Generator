const quoteElement = document.querySelector('#quote');
const newQuoteButton = document.querySelector('#new-quote-btn');
const shareTwitterButton = document.querySelector('#share-twitter-btn');

// Fetch a random quote from the Quotable API
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.log('Error fetching quote:', error);
        return 'An error occured while fetching the quote.';
    }
}

// Update the quote content
async function updateQuote() {
    const quote = await fetchQuote();
    quoteElement.textContent = quote;
}

// Event listener for the "New Quote" button
newQuoteButton.addEventListener('click', updateQuote);

// Event listener for the "Share on Twiiter" button
shareTwitterButton.addEventListener('click', () => {
    const quoteText = encodeURIComponent(quoteElement.textContent);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText}`;
    window.open(twitterUrl, '_blank');
});

// Initial quote update
updateQuote();