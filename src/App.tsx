import React from "react";
import styled from "styled-components";
import "./App.css";
import InputPins from "./components/tsx components/InputPins";
import Frame from "./components/tsx components/frame";

function totalScore(arr: number[]) {
  let clonedScoreArray = [...arr];
  let finalArr: number[] = [];

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
  const [scoreArray, setScoreArray] = React.useState<number[]>([]);

  const calculatedScores: number[] = totalScore(scoreArray);

  function resetFunction() {
    setScoreArray([]);
  }

  return (
    <Extruture>
      <Titulo>Bowling Score Board</Titulo>
      <button onClick={resetFunction}>Reset Game</button>
      <InputPins scoreArray={scoreArray} setScoreArray={setScoreArray} />
      {Array.from({ length: 10 }).map((_, index) => (
        <Frame key={index} index={index} scoreArray={scoreArray}>
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

const Titulo = styled.h1`
  text-shadow: 0.1em 0.1em white;
`;

export default App;
