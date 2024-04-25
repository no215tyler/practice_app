import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return (
      <div className="flex items-center flex-col">
        <h1 className="text-3xl font-bold text-center my-3">じゃんけんページ</h1>
        <div className="flex my-3">
          <button>
            <img src="images/rock.jpeg" alt="rock" className="h-[100px] w-[100px] border-2"></img>
          </button>
          <button>
            <img src="images/paper.jpeg" alt="paper" className="h-[100px] w-[100px] border-2"></img>
          </button>
          <button>
            <img src="images/scissors.jpeg" alt="scissors" className="h-[100px] w-[100px] border-2"></img>
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
