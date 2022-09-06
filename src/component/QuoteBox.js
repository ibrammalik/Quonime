import { useEffect, useState } from "react";
import $ from "jquery";

function QuoteBox() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [anime, setAnime] = useState();

  const updateQuote = () => {
    $.ajax({
      url: "https://animechan.vercel.app/api/random",
      success: (data) => {
        setQuote(data.quote);
        setAuthor(data.character);
        setAnime(data.anime);
      },
    });
  };

  useEffect(() => {
    updateQuote();
  }, []);

  const href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + quote + '" ' + author);

  return (
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
  );
}

export default QuoteBox;
