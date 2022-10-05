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
    "✨" : "sparcles",
    "🔥": "fire",
    "💣": "bomb",
    "🪔": "diwali"
  };

  //converted to array to render
  const emojis = Object.keys(emojiDictonary);

  const handleOnChange = (e) => {
    setShowUserInput(e.target.value);
    const result = emojiDictonary[e.target.value];
    if (!result) {
      return setExpression("failure to recognise this emoji");
    }
    setExpression(result);
  };

  const handleClick = (emoji) => {
    const result = emojiDictonary[emoji];
    setExpression(result);
  } 

  return (
    <div className="app">
      <h1>Emoji Interpreter</h1>
      <input
        type="text"
        className="input-field"
        placeholder="put an emoji here to know the meaning"
        onChange={handleOnChange}
      />
      <h2>{showUserInput}</h2>
      <h3>{expression}</h3>

      {emojis.map((emoji) => {
        return (
          <span key={emoji} className="emoji" onClick={()=>{handleClick(emoji)}}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

export default App;
