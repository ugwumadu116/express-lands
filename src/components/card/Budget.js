import React from "react";
import { Container } from "./elements";
import Meter from "./Meter";

const App = ({ data }) => {
  return (
    <Container iconBG={data.iconBG}>
      <div className="budget-card-heading">
        <div className="d-flex heading-content">
          <img src={data.icon} alt="budget icon" />
          <span>Total Annual {data.name} Budget</span>
          <div className="total-budget">
            <h3>N {data.budget}</h3>
          </div>
        </div>
        <select id="cars">
          <option value="volvo">Annual</option>
        </select>
      </div>
      <div className="budget-body">
        <Meter
          remaining={data.remaining}
          remainingColor={data.remainingColor}
        />
        <div>
          <div className="d-flex budget-card">
            <div className="spent">
              <img src={data.spentIMG} alt="spent" />
            </div>
            <div className="budger-content-wrapper">
              <div>
                Total <span className="budger-content-name">{data.name}</span>{" "}
                Spent
              </div>
              <div>N {data.spent}</div>
            </div>
          </div>

          <div className="d-flex budget-card">
            <div className="spent">
              <img src={data.balanceIMG} alt="Balance" />
            </div>
            <div className="budger-content-wrapper">
              <div>
                Total <span className="budger-content-name">{data.name}</span>{" "}
                Balance
              </div>
              <div>N {data.balance}</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default App;
