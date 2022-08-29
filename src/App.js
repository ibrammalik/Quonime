import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <p id="text">lorem ipsum sir dolor ametttttttttttttttttt</p>
          <p id="author">- maulana malik ibrahim</p>
          <div className="group-button">
            <button id="tweet-quote" target="_blank">
              Tweet Quote
            </button>
            <button id="new-quote">New Quote</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
