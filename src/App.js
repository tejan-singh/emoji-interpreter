import { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("Translation will appear here");
  const [showUserInput, setShowUserInput] = useState("");

  const emojiDictonary = {
    "😊": "Happy",
    "😳": "Disbelief",
    "😔": "Sad",
    "🥡": "Takeout Box",
    "❤️": "Love",
    "😑": "annoyance",
  };

  //converted to array to render
  const emojis = Object.keys(emojiDictonary);

  const checkEmoji = (e) => {
    const result = emojiDictonary[e.target.value];
    if (!result) {
      setExpression("failure to recognise this emoji");
      setShowUserInput(e.target.value);
    } else {
      setExpression(result);
      setShowUserInput(e.target.value);
    }
  };

  return (
    <div className="app">
      <h1>Emoji Interpreter</h1>
      <input
        type="text"
        className="input-field"
        placeholder="put an emoji here to know the meaning"
        onChange={checkEmoji}
      />
      <h2>{showUserInput}</h2>
      <h3>{expression}</h3>

      {emojis.map((emoji) => {
        return (
          <span key={emoji} className="emoji">
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

export default App;
