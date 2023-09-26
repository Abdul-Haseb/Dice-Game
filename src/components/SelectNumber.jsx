/* eslint-disable react/prop-types */
import styled from "styled-components";

const SelectNumber = ({ setError, error, selectedNumb, setSelectedNumb }) => {
  const numArr = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumb(value);
    setError("");
  };
  return (
    <NumSelContainer>
      <p className="error">{error}</p>
      <div className="numSelector">
        {numArr.map((value, i) => (
          <Box
            isslected={value === selectedNumb}
            onClick={() => numberSelectorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumSelContainer>
  );
};

export default SelectNumber;

const NumSelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  .numSelector {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
    font-size: 16px;
    margin-bottom: -25px;
    margin-top: 20px;
    padding: 6px;
    font-weight: 500;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
  align-items: center;
  width: 72px;
  height: 72px;
  border: 1px solid black;
  background-color: ${(props) => (props.isslected ? "black" : "white")};
  color: ${(props) => (!props.isslected ? "black" : "white")};
`;
