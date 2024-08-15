import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import { useState } from 'react';

const choice = {
  rock:{
    name: "rock",
    img:"https://blog.kakaocdn.net/dn/dWscPZ/btqFnPyjcoJ/EkFxXpYN58Xaf0HuAMWpH0/img.png"
  },
  scissors:{
    name: "scissors",
    img: "https://blog.kakaocdn.net/dn/2mqrU/btqFofJ2wP2/bofI0Wf6C0uQZPyHsKtSS0/img.png"
  },
  papper:{
    name: "papper",
    img: "https://lh3.googleusercontent.com/proxy/UqO2q49iGbGih48fn0auuSapg022kE_xUj2O1ZAcZiMGGT5SPUt-tmZhCXNB-_NT-rETAHJbo8rtEzYGUVv3dptPvhpmIo--gHd8bJI8irPXgx-kIQ"
  }
}
function App() {
  // 1. 박스 2개 (title, image, result)
  // 2. button 3개(가위 바위 보)
  // 3. 박스 1 -> 내가 선택한 버튼 박스에 표시
  // 4. 박스 2 -> 컴퓨터 랜덤으로 선택
  // 5. 3, 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
  // 6. 승패 결과에 따라 테두리 색 변경 (승 초록, 패 빨강, 무 검정)

  const [userSelect, setUserSelect] = useState('');
  const [computerSelect, setComputerSelect] = useState('');
  const [result, setResult] = useState('');
  const [computerResult, setComputerResult] = useState('');

  //player 선택
  const play = (userChoice) => {
    console.log(userChoice);
    setUserSelect(choice[userChoice]);
    //console.log(userSelect);

    let computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);
    //console.log("computerSelect : ", computerSelect);

    //setResult(judgement(choice[userChoice], choice[computerChoice]));
    let userResult = judgement(choice[userChoice], choice[computerChoice])
    setResult(userResult);
    /*
    if(userResult === "win") {
      setComputerResult("lose");
    } else if (userResult === "lose") {
      setComputerResult("win");
    } else {
      setComputerResult("tie");
    }
    */
    const computerResult = userResult === "win" ? "lose" : userResult === "lose" ? "win" : "tie";
    setComputerResult(computerResult);

  }

  const judgement = (user, computer) => {
    console.log("user : ", user);
    console.log("computer : ", computer);
    // 비길경우 user.name === computer.name
    /* 
    유저가 이길경우 user.name = rock -> computer-> scissors
                  user.name = scissors -> computer-> papper
                  user.name = papper -> computer-> rock

    유저가 질경우 user.name = rock -> computer-> papper
                user.name = scissors -> computer-> rock
                user.name = papper -> computer-> scissors

    삼항연산자 사용 setResult(user.name === "rock"  )
    */
    if (user.name == computer.name) {
      return "tie"
    } else if(user.name == "rock") return computer.name == "scissors" ? "win" : "lose"
    else if(user.name == "scissors") return computer.name == "papper" ? "win" : "lose"
    else if(user.name == "papper") return computer.name == "rock" ? "win" : "lose"

  }

  // computer 선택
  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 어레이로 만들어주는 함수
    console.log("itemArray : ", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length); // Math.floor : 소수점 버림
    console.log("randomItem", randomItem);

    let final = itemArray[randomItem];
    console.log("final : ", final);
    return final;
    //return choice[final];

  }

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={computerResult}/>
      </div>
      <div className='button'>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("papper")}>보</button>
      </div>
    </>
  );
}

export default App;
