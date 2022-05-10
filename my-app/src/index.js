import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const QUOTES = [
    { quote: 'quote 1', author: 'author 1' },  { quote: 'quote 2', author: 'author 2' },  { quote: 'quote 3', author: 'author 3' },  { quote: 'quote 4', author: 'author 4' },  { quote: 'quote 5', author: 'author 5' },  { quote: 'quote 6', author: 'author 6' },  { quote: 'quote 7', author: 'author 7' },  { quote: 'quote 8', author: 'author 8' },  { quote: 'quote 9', author: 'author 9' },  { quote: 'quote 10', author: 'author 10' },
  ]
  
  const getRandomQuote = () => {
    return QUOTES.sort(() => Math.random() - 0.5)[0];
  }
  
  const App = () => {
    const [quote, setQuote] = React.useState(getRandomQuote());
    
    const newQuote = () => {
      setQuote(getRandomQuote());
    }
    
    return <div id='quote-container'>
      <div id="quote-box">
      <div id="text">{quote.quote}</div>
      <div id="author">{quote.author}</div>
      <div>
        <button
          id="new-quote"
          onClick={newQuote}
        >New Quote</button>
      </div>
      <div>
        <a id="tweet-quote"
          href="twitter.com/intent/tweet"
        >Tweet Quote</a>
      </div>
    </div>
      </div>
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  