import React from "react";
import { Status } from "./elements";
const App = ({ data }) => {
  return (
    <Status>
      <div className="status-header">
        <img src={data.image} alt="logo" />
        <h1>{data.name}</h1>
      </div>
      <div className="status-footer">{data.amount}</div>
    </Status>
  );
};

export default App;
