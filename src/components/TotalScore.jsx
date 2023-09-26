/* eslint-disable react/prop-types */
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ToatalScore>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ToatalScore>
  );
};

export default TotalScore;

const ToatalScore = styled.div`
  width: 200px;
  height: auto;
  text-align: center;
  h1 {
    font-size: 90px;
    font-weight: 500;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
