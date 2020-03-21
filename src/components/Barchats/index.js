import React from "react";
import { data } from "./data";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { totalBudgetData } from "../../assets/data";
import { Container } from "./elements";

const App = () => (
  <Container>
    {totalBudgetData.map(item => (
      <div className="chat-wrapper" key={item.id}>
        <div className="bar-content">
          <h4>Total {item.name} Budget Statistics</h4>
          <p> Total Budget Spent VS Total Budget Balance</p>
          <div className="total-amount">
            <div>
              <span>Total Spent</span>
              <span className="spent">{item.totalSpent}</span>
            </div>
            <div>
              <span>Total Balance</span>
              <span className="balance">{item.totalBalance}</span>
            </div>
          </div>
        </div>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="spent" fill="#17c7bf" />
          <Bar dataKey="balance" fill="#e95957" />
        </BarChart>
      </div>
    ))}
  </Container>
);

export default App;
