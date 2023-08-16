import React, { FormEvent } from "react";
import styled from "styled-components";

interface InputPinsProps {
  scoreArray: number[];
  setScoreArray: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function InputPins({
  scoreArray,
  setScoreArray,
}: InputPinsProps) {
  const [inputSubmit, setInputSubmit] = React.useState<string>("");

  function inputScore(event: FormEvent) {
    event.preventDefault();
    const pinos: number = parseInt(inputSubmit);
    const isNumber: boolean = /[0-9]/.test(inputSubmit);

    if (isNumber) {
      if (scoreArray.length % 2 !== 0) {
        let reamaningPins = [...scoreArray];
        let lastNumber = reamaningPins.pop();
        if (pinos > 10 - (lastNumber ? lastNumber : 0)) {
          alert("Valor invalido");
          return;
        }
      }

      if (scoreArray.length % 2 === 0 && pinos === 10) {
        let currentArray = [...scoreArray, pinos, 0];
        setScoreArray(currentArray);
      } else {
        let currentArray = [...scoreArray, pinos];
        setScoreArray(currentArray);
      }

      setInputSubmit("");
    }
  }

  return (
    <>
      {/* {scoreArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)} */}

      <Input className="search-form" onSubmit={inputScore}>
        <input
          type="number"
          max="10"
          min="0"
          value={inputSubmit}
          onChange={(event) => {
            setInputSubmit(event.target.value);
          }}
        />
        <button type="submit">Throw</button>
      </Input>
    </>
  );
}

const Input = styled.form`
  margin-bottom: 50px;
`;
