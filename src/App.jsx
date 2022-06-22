import React from "react";

import "./index.css";

import { EkkoBox, EkkoTitle, Ekko } from "./style";
import {
  TimerBox,
  Sword,
  Timer,
  ElementsTimer,
  ButtonsBox,
  ButtonTimer
} from "./style";
import {
  WindowOne,
  CircleBoxOne,
  WindowTwo,
  CircleBoxTwo,
  Circle
} from "./style";
import { EkkoHour, Riot } from "./style";

import {
  EkkoIcon,
  SwordIcon,
  Play,
  Pause,
  Reset,
  RiotIcon
} from "./assets/index";

export default function () {
  return (
    <div className="globalDiv">
      <EkkoHour>{}</EkkoHour>
      <Ekkoo />
      <EkkoTimer />
      <Riot src={RiotIcon} />
    </div>
  );
}

class Ekkoo extends React.Component {
  render() {
    return (
      <EkkoBox>
        <WindowOne>
          <CircleBoxOne>
            <Circle />
            <Circle />
            <Circle />
          </CircleBoxOne>
        </WindowOne>
        <EkkoTitle>Ekko Timer</EkkoTitle>
        <Ekko src={EkkoIcon} />
      </EkkoBox>
    );
  }
}

class EkkoTimer extends React.Component {
  state = {
    time: 0
  };

  play = () => {
    setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  };

  pause = () => {
    clearInterval(this.play);
  };

  reset = () => {
    this.setState({
      time: 0
    });
  };

  render() {
    return (
      <TimerBox>
        <WindowTwo>
          <CircleBoxTwo>
            <Circle />
            <Circle />
            <Circle />
          </CircleBoxTwo>
        </WindowTwo>
        <ElementsTimer>
          <Sword src={SwordIcon} />
          <Timer>{this.state.time}</Timer>
          <Sword src={SwordIcon} />
        </ElementsTimer>
        <ButtonsBox>
          <ButtonTimer
            src={Play}
            onClick={() => {
              this.play();
            }}
          />
          <ButtonTimer
            src={Pause}
            onClick={() => {
              this.pause();
            }}
          />
          <ButtonTimer
            src={Reset}
            onClick={() => {
              this.reset();
            }}
          />
        </ButtonsBox>
      </TimerBox>
    );
  }
}
