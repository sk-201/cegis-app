import React, { useContext, useEffect, useState } from "react";

import BarChart from "../components/BarChart";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";

Chart.register(CategoryScale);
const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [selectedState, setSelectedState] = useState("Delhi");
  const [dataset, setDataSet] = useState();
  const navigate = useNavigate();
  const getData = async () => {
    let dataSend = {
      stateName: selectedState,
    };
    try {
      const data = await fetch(`${process.env.REACT_APP_BASE_URL}/getData`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const response = await data.json();
      setDataSet(response.rows);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let username = localStorage.getItem("TOKEN");

    if (!user && username !== "0000") {
      navigate("/");
    }
    getData();
  }, [selectedState]);
  useEffect(() => {
    setChartData({
      labels: dataset?.map((data) => data.item_name + " " + data.district_name),
      datasets: [
        {
          label: "Items",
          data: dataset?.map((data) => data.available),
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
  }, [dataset]);

  const [chartData, setChartData] = useState({});
  const logout = () => {
    setUser(null);
    localStorage.removeItem("TOKEN");
    navigate("/");
  };
  return (
    <div className="w-full">
      <div className=" flex justify-end mx-20 mt-5">
        <Dropdown
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />
        <button
          className="bg-red-500   mx-20 hover:bg-red-800   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={logout}
        >
          Log out
        </button>
      </div>
      <div className=" w-[80%]  mx-auto ">
        {dataset === undefined ? null : <BarChart chartData={chartData} />}
      </div>
    </div>
  );
};

export default Dashboard;
