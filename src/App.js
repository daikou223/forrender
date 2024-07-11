import React,{useState} from "react";
import { InlineMath} from 'react-katex';
import 'katex/dist/katex.min.css';
const plobs = [""]

function App() {
  const [text, setText] = useState("");
  const[plob,setPlob] = useState("");
  const[point,setpoint] = useState(0);
  const onClickAddText = () => {
    var temptext = "";
    var templst = [];
    var tempind = "";
    var p = 0
    for(var j = 0;j<text.length;j++){
      console.log(temptext);
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
      else if(p >0){
        tempind += text[j];
      }
      else{
        temptext += text[j];
      }
    }
    plobs[point] = temptext;
    console.log(plobs);
    setpoint(point + 1);
    setPlob(plobs.map((ploby,index)=>
      <tr key = {index}>
        <td>
        ({index+1})
        </td>
        <td><InlineMath>{ploby}</InlineMath></td>
        </tr>));
  };

  return (
    <div className="App">
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax
/2.7.7/MathJax.js?config=TeX-AMS_CHTML"></script>
      <input type = "text"value = {text}
      onChange={(event) => setText(event.target.value)}/>
      <button onClick={onClickAddText}>追加</button>
      <table>
			<tr><th width = "500">氏名:</th><th width = "200">得点</th><th>/{point}</th></tr>
      </table>
      <table>
      {plob}
      </table>
    </div>
  );
}

export default App;
