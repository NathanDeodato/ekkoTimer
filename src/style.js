import styled from "styled-components";

export const EkkoHour = styled.h2`
  position: absolute;

  font-size: 2.2em;
`;

//

export const EkkoBox = styled.div`
  width: 28vw;
  height: 70vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: #8c8354;
  border-radius: 20px;
`;

export const EkkoTitle = styled.h1`
  font-size: 2.5em;
`;

export const Ekko = styled.img`
  height: 70%;
`;

//

export const TimerBox = styled.div`
  width: 50vw;
  height: 55vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #8c8354;
  border-radius: 20px;
`;

export const Sword = styled.img`
  width: 15%;
`;

export const Timer = styled.p`
  width: 30%;
  height: 60%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 4px solid #2d2d2d;
  border-radius: 30px;

  font-size: 3em;
`;

export const ElementsTimer = styled.div`
  width: 100%;
  height: 45%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonsBox = styled.div`
  width: 80%;
  height: 30%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonTimer = styled.img`
  width: 10%;

  &:hover {
    cursor: pointer;
  }
`;

//

export const Riot = styled.img`
  width: 20vw;

  position: absolute;
  left: 38vw;
  top: 82vh;
`;

export const NT = styled.img``;

//

export const WindowOne = styled.div`
  width: 100%;
  height: 11%;

  display: flex;
  justify-content: flex-start;

  border-bottom: 3px solid #2d2d2d;
`;

export const CircleBoxOne = styled.div`
  width: 20%;
  height: 100%;

  margin-left: 5%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

//

export const WindowTwo = styled.div`
  width: 100%;
  height: 13%;

  display: flex;
  justify-content: flex-start;

  border-bottom: 3px solid #2d2d2d;
`;

export const CircleBoxTwo = styled.div`
  width: 11%;
  height: 100%;

  margin-left: 3%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

//

export const Circle = styled.div`
  width: 2.5vw;
  height: 2.5vh;

  shape-outside: circle();
  clip-path: circle();

  background-color: #2d2d2d;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;
