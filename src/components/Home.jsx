/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button } from "./styled/Button";
const Home = ({ toggle }) => {
  return (
    <Container>
      {/* DICE IMAGE  */}
      <div>
        <img src="./images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <div className="content__button">
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 30px;
  .content {
    h1 {
      font-size: 96px;
      font-weight: 700;
      white-space: nowrap;
    }
    .content__button {
      display: flex;
      justify-content: flex-end;
    }
  }
`;
