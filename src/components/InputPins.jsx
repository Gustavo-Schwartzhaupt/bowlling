import React from "react";
import styled from "styled-components";

export default function InputPins({ scoreArray, setScoreArray }) {
  const [inputSubmit, setInputSubmit] = React.useState("");

  function inputScore(event) {
    event.preventDefault();
    const pinos = parseInt(inputSubmit);
    const isNumber = /[0-9]/.test(pinos);

    if (isNumber) {
      if (scoreArray.length % 2 !== 0) {
        let reamaningPins = [...scoreArray];
        let lastNumber = reamaningPins.pop();
        if (pinos > 10 - lastNumber) {
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
