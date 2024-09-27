import React, { useState, useEffect } from "react";

const Dropdown = ({ selectedState, setSelectedState }) => {
  const [states, setStates] = useState();

  const [showDropdown, setShowDropdown] = useState(false);
  const getData = async () => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getStatesData`
      );
      const response = await data.json();
      setStates(response.rows);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const toggleDropdown = (name) => {
    setSelectedState(name);
    setShowDropdown((prev) => !prev);
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          {selectedState}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        {showDropdown === true ? (
          <div className="py-1" role="none">
            {states?.map((state) => {
              return (
                <a
                  key={state.state_id}
                  onClick={() => toggleDropdown(state.state_name)}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  {state.state_name}
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
