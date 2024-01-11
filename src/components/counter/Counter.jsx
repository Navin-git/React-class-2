import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-10 flex gap-10 items-center justify-center">
      <button
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
        className="bg-gray-300 p-2 rounded-md border-gray-500 border"
      >
        sub
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          count < 10 && setCount((pre) => pre + 1);
        }}
        className="bg-gray-300 p-2 rounded-md border-gray-500 border"
      >
        add
      </button>
    </div>
  );
};

export default Counter;
