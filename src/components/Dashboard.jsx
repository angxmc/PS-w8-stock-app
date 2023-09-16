import React from "react";
import stocks from '../data'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>{stock.name} ({stock.symbol})</li>
        ))}
      </ul>
    </div>
  );
}
export default Dashboard;
