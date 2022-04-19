import React from "react";
import Charts from "../Chart/Charts";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  
  for (const expense of props.filteredExpenses) {
      const expenseMonth = expense.date.getMonth();
    // It Returns Month In Integer.... [ 0 for Jan, 1 for Fab,...,11 for Dec]

    chartDataPoints[expenseMonth].value =
      chartDataPoints[expenseMonth].value + expense.amount;
    // chartDataPoints[0].value = chartDataPoints[0].value + 12.09
    // chartDataPoints[1].value = chartDataPoints[1].value + 11.09

  }
  return (
    <>
      <Charts dataPoints = {chartDataPoints} />
    </>
  );
};

export default ExpensesChart;
