import "./App.css";
import { useEffect, useState } from "react";
import $ from "jquery";

function App() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  const updateQuote = () => {
    $.ajax({
      url: "https://api.quotable.io/random",
      success: (data) => {
        setQuote(data.content);
        setAuthor(data.author);
      },
    });
  };

  const href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + quote + '" ' + author);

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <p id="text">{quote}</p>
          <p id="author">- {author}</p>
          <div className="group-button">
            <a target="_top" href={href}>
              <button id="tweet-quote">Tweet Quote</button>
            </a>
            <button id="new-quote" onClick={updateQuote}>
              New Quote
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
