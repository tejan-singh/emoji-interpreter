import { useState } from "react";
import "./App.css";

function App() {

  const [expression, setExpression] = useState("Translation will appear here")
  const [userInput, setUserInput] = useState("")

  const emojiDictonary = {
    "😊": "Happy",
    "😳": "Disbelief",
    "😔": "Sad",
    "🥡": "Takeout Box",
    "❤️": "Love",
    "😑": "annoyance"
  };

  const checkEmoji = (e) => {

    if(!emojiDictonary[e.target.value]){
      return setExpression("failure to recognise this emoji")
    }

    const result = emojiDictonary[e.target.value]
    setExpression(result)
    setUserInput(e.target.value)
  }

  return (
    <div className="app">
      <h1>Emoji Interpreter</h1>
      <input
        type="text"
        className="input-field"
        placeholder="put an emoji here to know the meaning"
        onChange={checkEmoji}
      />
      <h2>{userInput}</h2>
      <h1>{expression}</h1>
      <span className="emoji"> 😊 </span>
      <span className="emoji"> 😳 </span>
      <span className="emoji"> 😔 </span>
      <span className="emoji"> 🥡 </span>
      <span className="emoji"> ❤️ </span>
      <span className="emoji"> 😑 </span>
    </div>
  );
}

export default App;
