import React, { useState } from "react";
import { Bar, Bubble, Doughnut, Pie, Polar, Radar } from "react-chartjs-2";
import Aos from "aos";
import "aos/dist/aos.css";

function CovidDoughnut() {
  const [displayChart, setDisplayChart] = useState(false);
  const chartData1 = [10, 20, 30, 40];
  const data = {
    labels: ["New", "Recovered", "Isolated", "Died"],
    datasets: [
      {
        label: "Cumulative Info Of Covid Recovered",
        data: [44, 54, 40, 30],
        backgroundColor: [
          "#00768b",
          "#49b86b",
          "#ff5555",
          "#ffe333",
          "#cc4477",
        ],
        hoverBackgroundColor: "lightseagreen",
        hoverBorderWidth: "5px",
        borderAlign: "inner",
      },
      {
        label: "Cumulative Info Of Covid Death",
        data: [48, 58, 44, 34],
        backgroundColor: ["#ccddec", "#ccddec", "#ccddec", "#ccddec"],
        hoverBackgroundColor: "lightseagreen",
      },
    ],
  };

  return (
    <div className="covidstatsDiv">
      <h1 data-aos="zoom-up">covid stats.com</h1>
      <h3 data-aos="zoom-up" className="frontPageHeader">
        Covid cases reported and recovered in millions{" "}
      </h3>
      <Polar data={data} />
    </div>
  );
}

export default CovidDoughnut;
