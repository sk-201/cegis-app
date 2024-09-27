import React, { useState } from "react";
import PieCard from "../components/PieCard";
import BarChart from "../components/BarChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);
const Dashboard = () => {
  const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const data_set = {
    labels: ["Red", "Orange", "Blue"],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: [
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };
  //   const items = [
  //     { id: 1, name: "Classrooms" },
  //     { id: 2, name: "Benches" },
  //     { id: 3, name: "Tables" },
  //     { id: 4, name: "Blackboards" },
  //     { id: 5, name: "Libraries" },
  //     { id: 6, name: "Playgrounds" },
  //     { id: 7, name: "Toilets" },
  //     { id: 8, name: "Water" },
  //   ];
  return (
    <div className=" w-[80%]  mx-auto">
      {/* <PieChart chartData={chartData} /> */}
      <BarChart chartData={chartData} />
    </div>
  );
};

export default Dashboard;
