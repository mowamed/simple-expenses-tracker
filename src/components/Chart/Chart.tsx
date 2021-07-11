import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props: any) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: any) => dataPoint.value
  );
  const maxValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          max={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
