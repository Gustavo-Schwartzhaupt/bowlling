import React from "react";
import styled from "styled-components";

export default function Frame({ children, scoreArray, index }) {
  const firstThrow = scoreArray[index * 2];
  const secondThrow = scoreArray[index * 2 + 1];

  const isStrike = firstThrow === 10;
  const isSpare = !isStrike && firstThrow + secondThrow === 10;

  const isLastFrame = index === 9;

  const isSpareOn19Play =
    isLastFrame &&
    scoreArray[19] !== 10 &&
    scoreArray[18] !== 10 &&
    scoreArray[19] + scoreArray[18] === 10;

  const isStrikeOn18Play = isLastFrame && scoreArray[18] === 10;
  const isStrikeOn20Play = isLastFrame && scoreArray[20] === 10;
  const isStrikeOn22Play = isLastFrame && scoreArray[22] === 10;

  return (
    <>
      <BoxFrame>
        <TopFrame>
          <TopLeftframe>
            {!isStrike && index === 0
              ? scoreArray[0]
              : isStrike
              ? ""
              : firstThrow}
            {isStrikeOn18Play ? "X" : ""}
          </TopLeftframe>
          {isStrikeOn20Play && <IsBonusPlay>X</IsBonusPlay>}
          {isSpareOn19Play && <IsBonusPlay>/</IsBonusPlay>}
          <TopRightframe>
            {!isLastFrame &&
              !isStrike &&
              (!isSpare && index === 0
                ? scoreArray[1]
                : isSpare
                ? "/"
                : secondThrow)}
            {isLastFrame &&
              !isSpareOn19Play &&
              !isStrikeOn18Play &&
              secondThrow}
            {!isLastFrame && (isStrike ? "X" : "")}
            {isStrikeOn22Play && "X"}
          </TopRightframe>
        </TopFrame>
        <BottomFrame>{children}</BottomFrame>
      </BoxFrame>
    </>
  );
}

const TopFrame = styled.div`
  height: 50%;
  position: relative;
`;

const TopLeftframe = styled.div`
  background-color: Peru;
  width: 50%;
  height: 30px;
  text-align: center;
  color: black;
  position: absolute;
  top: 0;
  left: 0;
`;

const TopRightframe = styled.div`
  background-color: SaddleBrown;
  width: 50%;
  color: black;
  height: 30px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
`;

const BottomFrame = styled.div`
  font-size: 1.5rem;
  height: 50%;
  display: table;
  width: 100%;
  text-align: center;
`;

const BoxFrame = styled.div`
  background-color: gray;
  color: white;
  width: 180px;
  height: 130px;
  border: 2px solid black;
  position: relative;
  z-index: 0;
  display: inline-block;
  border-radius: 5px;
  margin: 10px 20px;
`;

const IsBonusPlay = styled.span`
  position: absolute;
  z-index: 1;
  margin: 0;
`;
