import React,{useState} from "react";

function App() {
  const [text, setText] = useState("");
  const [addText, setAddText] = useState("");

  const onClickAddText = () => {
    setAddText(text);
    setText("");
  }

  return (
    <div className="App">
      <input type = "text"value = {text}
      onChange={(event) => setText(event.target.value)}/>
      <button onClick={onClickAddText}>追加</button>
      <p>リアルタイム：{text}</p>
      <table>
      <p>ボタンクリック：{addText}</p>
      </table>
    </div>
  );
}

export default App;
