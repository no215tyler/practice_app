import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      selectHand: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center flex-col">
        <h1 className="text-3xl font-bold text-center my-3">じゃんけんページ</h1>
        <div className="flex my-3">
          <button
            onClick={() => {
              this.setState({selectHand: 0});
            }} className="opacity-30 focus:opacity-100">
            <img src="images/rock.jpeg" alt="rock" className="h-[100px] w-[100px] border-2"></img>
          </button>
          <button 
            onClick={() => {
              this.setState({selectHand: 1})
            }} className="opacity-30 focus:opacity-100">
            <img src="images/scissors.jpeg" alt="scissors" className="h-[100px] w-[100px] border-2"></img>
          </button>
          <button 
            onClick={() => {
              this.setState({selectHand: 2})
            }} className="opacity-30 focus:opacity-100">
            <img src="images/paper.jpeg" alt="paper" className="h-[100px] w-[100px] border-2"></img>
          </button>
        </div>

        <Link to="/">
          <h1 className="text-3xl font-bold text-center my-3">じゃんけんを終了する</h1>
          <h4 className="text-xl mt-4">※戦績が発表されます。</h4>
        </Link>
      </div>
    );
  }
}
