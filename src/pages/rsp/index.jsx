import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return (
      <div className="flex items-center flex-col">
        <h1 className="text-3xl font-bold text-center">じゃんけんページ</h1>
        <Link to="/">
          <h1 className="text-3xl font-bold text-center">じゃんけんを終了する</h1>
        </Link>
      </div>
    );
  }
}
