import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ItemForm = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="w-full h-screen flex items-center justify-center mt-20 ">
      <div className=" max-w-md  ">
        <button
          className="bg-red-500 absolute hover:bg-red-800  right-5 lg:right-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => setUser(null)}
        >
          Log out
        </button>
        <p className="text-2xl text-center font-bold mt-16 mb-10">
          Please fill the following information
        </p>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="classrooms"
            >
              Classrooms
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="classrooms"
              type="number"
              placeholder="Classrooms"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="benches"
            >
              Benches
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="benches"
              type="number"
              placeholder="Benches"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="tables"
            >
              Tables
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tables"
              type="number"
              placeholder="Tables"
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="libraries"
            >
              Libraries
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="libraries"
              type="number"
              placeholder="Libraries"
            />
            <div className="mb-5 mt-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="playground"
              >
                Playgrounds
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="playground"
                type="number"
                placeholder="Playgrounds"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="toilets"
              >
                Toilets
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="toilet"
                type="number"
                placeholder="Toilets"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="water"
              >
                Water
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="water"
                type="number"
                placeholder="Water"
              />
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <button
              className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
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
