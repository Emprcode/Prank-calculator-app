import logo from './logo.svg';
import './App.css';
import { Display } from './components/Display';
import { BtnArea } from './components/BtnArea';
import { useState } from 'react';
import abc from './components/abc.wav';
const operators = ["%", "/", "*", "-", "+"];

const App = () => {
  const [str, setStr] = useState("");
  const [lastOperator, setlastOperator] = useState("");
  const [isPrank, setIsPrank] = useState(false);
  const audio = new Audio(abc);

  const extraValue = () => {
    const num = Math.round(Math.random() * 10)
    return num > 3 ? 0 : num;
  }

  const handleOnClick =(val) => {
      console.log(val);

      isPrank && setIsPrank(false);

      if(val === "AC"){
        setStr('')
        return;
    }
    if (val === "C"){
      const shortStr = str.slice(0,-1);
      return setStr(shortStr);

    }

    if(val === "="){
      const lastChar = str[str.length -1];
      let strToDisplay = str

      if (operators.includes(lastChar)){
         strToDisplay = str.slice(0,-1);
      }

      const extra = extraValue();

      extra &&  audio.play() && setIsPrank(true) ;
      const ttl = eval(strToDisplay) + extra;

     
      setStr(ttl. toString());
      return;

  }

  
  //prevent multiple operator

  if(operators.includes(val)){
    setlastOperator(val);

    if(!str){
        return;
    };
    const lastChar = str[str.length -1];

    let tempStr = str
    if (operators.includes(lastChar)){
        tempStr = str.slice(0, -1);
    }
    setStr(tempStr + val);
    return;
};

// make sure no more then one dot

if ( val === "."){

  if(lastOperator){
      const operatorIndex = str.lastIndexOf(lastOperator);
      const lastNumberSet = str.slice(operatorIndex + 1);
      if (lastNumberSet.includes(".")){
          return;
      }
  }

  if(!lastOperator && str.includes(".")){
      return;
  }
}





      setStr(str + val);
  }
  return (
    <div className="wrapper">
        <div className="calculator">
            <Display string={str} isPrank= {isPrank}/>
            <BtnArea handleOnClick={handleOnClick}/>
           
        </div>
        <div className="ball"></div>
    </div>
  );
}

export default App;
