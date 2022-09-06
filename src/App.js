import "./App.css";
import { useEffect, useState } from "react";
import $ from "jquery";
import Footer from "./component/Footer";

function App() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [anime, setAnime] = useState();

  useEffect(() => {
    updateQuote();
  }, []);

  const updateQuote = () => {
    console.log("ok");
    // $.ajax({
    //   url: "https://animechan.vercel.app/api/random",
    //   success: (data) => {
    //     setQuote(data.quote);
    //     setAuthor(data.character);
    //     setAnime(data.anime);
    //   },
    // });
  };

  const href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + quote + '" ' + author);

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box" className="shadow">
          <p id="anime">{anime}</p>
          <p id="text">{quote}</p>
          <p id="author">- {author}</p>
          <div className="group-button">
            <a target="_top" href={href} id="tweet-quote">
              <button className="button">Tweet Quote</button>
            </a>
            <button id="new-quote" onClick={updateQuote} className="button">
              New Quote
            </button>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
