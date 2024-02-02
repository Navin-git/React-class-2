import React from "react";

const Toggle = ({ setDark }) => {
  //   console.log(setDark);
  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input
          onClick={() => {
            setDark((pre) => !pre);
          }}
          type="checkbox"
          className="checkbox"
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
