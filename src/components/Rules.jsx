import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get some point as dice
      </p>
      <p>If you get wrong guess then 2 points will be deducted</p>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 794px;
  background-color: #faf0f0;
  padding: 24px;
  margin: 0 auto;
  margin-top: 10px;
  h2 {
    font-size: 24px;
    margin-bottom: 24px;
  }
  p {
  }
`;
