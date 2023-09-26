/* eslint-disable react/prop-types */
import styled from "styled-components";

const RollDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`./images/dices/dice_${currentDice}.png`} width={130} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;
