import React from "react";
import styled from "styled-components";
import "./App.css";
import InputPins from "./components/InputPins";
import Frame from "./components/frame";

function totalScore(arr) {
  let clonedScoreArray = [...arr];
  let finalArr = [];

  for (let i = 0; i < clonedScoreArray.length; i++) {
    let isFirstThrow = finalArr.length !== 0 ? finalArr.length : 0;
    if (clonedScoreArray[isFirstThrow * 2] === 10) {
      // se o cara mete strike

      if (clonedScoreArray[i + 2] === 10) {
        finalArr.push(
          (finalArr[finalArr.length - 1] ? finalArr[finalArr.length - 1] : 0) +
            clonedScoreArray[i] +
            (clonedScoreArray[i + 2] ? clonedScoreArray[i + 2] : 0) +
            (clonedScoreArray[i + 4] ? clonedScoreArray[i + 4] : 0)
        );
      } else {
        finalArr.push(
          (finalArr[finalArr.length - 1] ? finalArr[finalArr.length - 1] : 0) +
            clonedScoreArray[i] +
            (clonedScoreArray[i + 2] ? clonedScoreArray[i + 2] : 0) +
            (clonedScoreArray[i + 3] ? clonedScoreArray[i + 3] : 0)
        );
      }
      i += 1;
    } else if (clonedScoreArray[i] + clonedScoreArray[i + 1] === 10) {
      // se o cara mete spare
      finalArr.push(
        clonedScoreArray[i] +
          clonedScoreArray[i + 1] +
          (finalArr.length !== 0 ? finalArr[finalArr.length - 1] : 0) +
          (clonedScoreArray[i + 2] ? clonedScoreArray[i + 2] : 0)
      );
      i += 1;
    } else if (clonedScoreArray[i + 1]) {
      // se só fizer a jogada normalß
      if (finalArr.length === 0) {
        // se for a primeira jogada
        finalArr.push(clonedScoreArray[i] + clonedScoreArray[i + 1]);
      } else {
        finalArr.push(
          clonedScoreArray[i] +
            clonedScoreArray[i + 1] +
            finalArr[finalArr.length - 1]
        );
      }
      i += 1;
    }
  }

  return finalArr;
}

function App() {
  const [scoreArray, setScoreArray] = React.useState([]);

  const calculatedScores = totalScore(scoreArray);

  function resetFunction() {
    setScoreArray([]);
  }

  return (
    <Extruture>
      <h1>Bowling ScoreBoard</h1>
      <button onClick={resetFunction}>Reset Game</button>
      <InputPins
        scoreArray={scoreArray}
        setScoreArray={setScoreArray}
        totalScore={totalScore}
      />
      {Array.from({ length: 10 }).map((_, index) => (
        <Frame
          key={index}
          index={index}
          scoreArray={scoreArray}
          setScoreArray={setScoreArray}
          calculatedScores={calculatedScores}
        >
          {calculatedScores[index] && calculatedScores[index]}
        </Frame>
      ))}
    </Extruture>
  );
}

const Extruture = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

export default App;
