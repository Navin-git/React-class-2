import React, { useState } from "react";

const IsTrue = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen((pre) => !pre);
        }}
      >
        click me
      </button>
      {isOpen ? "TRUE" : "FALSE"}
    </div>
  );
};

export default IsTrue;
