import React,{useState} from "react";
import styles from "./app.css";
import {InlineMath} from 'react-katex';
import 'katex/dist/katex.min.css';
let plobs = []

function App() {
  const ondelete = (id) =>{
    for(let i = id;i<plobs.length-1;i++){
      plobs[i] = plobs[i+1];
    }
    plobs.pop();
    setPlob(plobs.map((ploby,index)=>
      <tr key = {index}>
        <td>
        ({index+1})
        </td>
        <td><InlineMath>{ploby}</InlineMath></td><td><button className = "del" onClick={() => (ondelete(index))}>削除</button></td>
        </tr>));
  };
  const [text, setText] = useState("");
  const[plob,setPlob] = useState("");
  const onClickAddText = () => {
    var temptext = "";
    var templst = [];
    var tempind = "";
    var p = 0;
    let d = 1;
    for(var j = 0;j<text.length;j++){
      console.log(temptext);
      if(text[j] !== "*" && d !== 1){
        temptext += Math.floor(Math.random()*(d-1))+1;
        d = 1;
      }
      if(text[j] === "["){
        p = 1;
      }
      else if(text[j] === "]" && p > 0){
        templst[templst.length] = tempind;
        p += 1;
        temptext += templst[Math.floor(Math.random()*(p-1))];
        console.log(Math.floor(Math.random()*p));
        templst = [];
        tempind = "";
        p = 0
      }
      else if(text[j] === "," && p >0){
        templst[p-1] = tempind;
        tempind = "";
        p += 1;
      }
      else if(p === 0 && text[j] === "*"){
        d = d*10;
      }
      else if(p >0){
        tempind += text[j];
      }
      else{
        temptext += text[j];
      }
    }
    if(text[j] !== "*" && d !== 1){
      temptext += Math.floor(Math.random()*(d-1))+1;
      d = 1;
    }
    plobs[plobs.length] = temptext;
    setPlob(plobs.map((ploby,index)=>
      <tr key = {index}>
        <td>
        ({index+1})
        </td>
        <td><InlineMath>{ploby}</InlineMath></td><td><button className = "del" onClick={() => (ondelete(index))}>削除</button></td>
        </tr>));
  };

  return (
    <div className="App">
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax
/2.7.7/MathJax.js?config=TeX-AMS_CHTML"></script>
      <link type = "stylesheet" href = "./app.css"></link>
      <input className = "scr" type = "text"size = "50"value = {text}
      onChange={(event) => setText(event.target.value)}/>
      <button className = "scr" onClick={onClickAddText}>追加</button>
      <h1>基礎テストプリント</h1>
      <table>
			<tr><th width = "500">氏名:</th><th width = "200">得点</th><th>/{plobs.length}</th></tr>
      </table>
      <table>
      {plob}
      </table>
    </div>
  );
}

export default App;
