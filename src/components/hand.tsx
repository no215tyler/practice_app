import React from 'react';
import { HandType } from "../interfaces/handType";

interface Props {
  selectHand: HandType;
  clickHand: (val: HandType) => void;
  selectedHand: HandType;
}

export default class Hand extends React.Component<Props, {}> {
  render() {
    const imgSize = 100;
    const handTypes = ["rock", "scissors", "paper"]
    return (
      <div>
        <button onClick={() => {
          this.props.clickHand(this.props.selectHand);
        }}>
        <img 
          src={`images/${handTypes[this.props.selectHand]}.jpeg`} 
          alt={`${handTypes[this.props.selectHand]}`}
          className={`h-[${imgSize}px] w-[${imgSize}px] border-2 ${this.props.selectHand !== this.props.selectedHand ? 'opacity-30' : 'opacity-100'}`} />
        </button>
      </div>
    );
  }
}
