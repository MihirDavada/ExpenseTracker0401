import React from "react";
import ChartBar from "./ChartBar.jsx";
import "./Charts.css";

const Charts = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });

  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Charts;
