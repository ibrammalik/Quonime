import { useEffect, useState } from "react";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function QuoteBox() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [anime, setAnime] = useState();
  const [modeIcon, setModeIcon] = useState(faSun);
  const [mode, setMode] = useState();

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

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
    if (localStorage.getItem("mode") === null) {
      prefersDarkMode ? localStorage.setItem("mode", "dark") : localStorage.setItem("mode", "light");
    }
    setMode(localStorage.getItem("mode"));
  }, []);

  useEffect(() => {
    if (mode === "light" && document.getElementById("root").classList.contains("darktheme")) {
      document.getElementById("root").classList.remove("darktheme");
      setModeIcon(faSun);
    } else if (mode === "dark") {
      document.getElementById("root").classList.add("darktheme");
      setModeIcon(faMoon);
    }
  }, [mode]);

  const modeToggleClickHandler = () => {
    if (mode === "dark") {
      localStorage.setItem("mode", "light");
    } else if (mode === "light") {
      localStorage.setItem("mode", "dark");
    }
    setMode(localStorage.getItem("mode"));
  };

  const href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + quote + '" ' + author);

  return (
    <div id="quote-box" className="shadow">
      <div id="quote-box-header">
        <p id="anime">{anime}</p>
        <FontAwesomeIcon icon={modeIcon} id="mode-toggle" onClick={modeToggleClickHandler} />
      </div>
      <p id="text">{quote}</p>
      <p id="author">- {author}</p>
      <div className="group-button">
        <a target="_top" href={href} id="tweet-quote">
          <button className="button color-white">Tweet Quote</button>
        </a>
        <button id="new-quote" onClick={updateQuote} className="button color-white">
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
