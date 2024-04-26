import React from "react";
import { Link } from "react-router-dom";
import Hand from "../../components/hand";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      selectHand: 0,
    };
  }

  handleOnClick = (val) => {
    this.setState({selectHand: val});
  }

  render() {
    const handTypes = [0, 1, 2]
    return (
      <div className="flex items-center flex-col">
        <h1 className="text-3xl font-bold text-center my-3">じゃんけんページ</h1>
        <div className="flex my-3">
          {handTypes.map((handType) => (
            <Hand 
              selectHand={handType} 
              selectedHand={this.state.selectHand} 
              clickHand={this.handleOnClick} />
          ))}
        </div>

        <Link to="/">
          <h1 className="text-3xl font-bold text-center my-3">じゃんけんを終了する</h1>
          <h4 className="text-xl mt-4">※戦績が発表されます。</h4>
        </Link>
      </div>
    );
  }
}
