import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const ItemForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [school, setSchool] = useState("");
  const [item, setItem] = useState("Classrooms");
  const [available, setAvailable] = useState(false);
  const [working, setWorking] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    setUser(null);
    localStorage.removeItem("TOKEN");
    navigate("/");
  };
  const sendEntry = async () => {
    let dataSend = {
      school: school,
      username: user.name,
      item: item,
      available: available,
      working: working,
    };
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/insertEntry`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.status == 200) {
        alert("Insertion Done");
        setSchool("");
        setItem("Classrooms");
        setAvailable(false);
        setWorking(false);
      } else {
        const error = await res.json();
        alert(error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const items = [
    { id: 1, name: "Classrooms" },
    { id: 2, name: "Benches" },
    { id: 3, name: "Tables" },
    { id: 4, name: "Blackboards" },
    { id: 5, name: "Libraries" },
    { id: 6, name: "Playgrounds" },
    { id: 7, name: "Toilets" },
    { id: 8, name: "Waters" },
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center mt-20 ">
      <div className=" max-w-md  ">
        <button
          className="bg-red-500 absolute hover:bg-red-800 top-5 right-5 lg:right-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={logout}
        >
          Log out
        </button>
        <p className="text-2xl text-center font-bold  mb-10">
          Please fill the following information
        </p>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="school"
            >
              School ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="school"
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="School Id"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="classrooms"
            >
              Items
            </label>
            <select
              value={item}
              onChange={(e) => setItem(e.target.value)}
              id="items"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {items.map((item) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="radio"
              name="available"
              onClick={() => setAvailable(true)}
              class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="available"
              checked={available}
            />
            <label
              for="available"
              className="text-md mx-2 text-gray-700 text-sm font-normal mb-2"
            >
              Available
            </label>
          </div>
          <div className="mb-4">
            <input
              type="radio"
              name="working"
              onClick={() => setWorking(true)}
              class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="working"
              checked={working}
            />
            <label
              for="working"
              className="text-md mx-2 text-gray-700 text-sm font-normal mb-2"
            >
              Working Condition
            </label>
          </div>

          <div className="flex items-center justify-between ">
            <button
              className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={sendEntry}
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
