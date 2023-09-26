import styled from "styled-components";
import SelectNumber from "./SelectNumber";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "./styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumb, setSelectedNumb] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + 1);
  };
  const roleDice = () => {
    if (!selectedNumb) {
      setError("Please Select A Number");
      return;
    }
    const diceNumber = generateRandomNumber(1, 7);
    setCurrentDice(() => diceNumber);

    if (SelectNumber === diceNumber) {
      setScore((x) => x + 1);
    } else {
      setScore((x) => x - 2);
    }
    setSelectedNumb(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="navBar_Section">
        <TotalScore score={score} />
        <SelectNumber
          error={error}
          setError={setError}
          selectedNumb={selectedNumb}
          setSelectedNumb={setSelectedNumb}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((x) => !x)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  .navBar_Section {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 auto;
    gap: 10px;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;

    gap: 5px;
  }
`;
