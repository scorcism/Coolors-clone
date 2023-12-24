import React, { useEffect, useState } from "react";

const Body = () => {
  const [colors, setColors] = useState([]);

  const generateColorCode = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let randomPosition = Math.floor(Math.random() * 16);
      color += letters[randomPosition];
    }
    return color;
  };
  const getNewColor = () => {
    let local_colors = [];
    for (let i = 0; i < 6; i++) {
      local_colors[i] = generateColorCode();
    }
    setColors(local_colors);
  };

  const hadleSpaceBarClick = (e) => {
    if (e.code === "Space") {
      getNewColor();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", hadleSpaceBarClick);

    return () => {
      document.removeEventListener("keydown", hadleSpaceBarClick);
    };
  }, []);

  useEffect(() => {
    getNewColor();
  }, []);

  return (
    <div className="bg-primary/70 h-[92vh] w-full flex flex-row justify-between">
      {colors.map((color) => (
        <Div key={color} color={color} />
      ))}
    </div>
  );
};

const Div = ({ color }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: color,
        }}
        className={`w-full my-2 mx-2 rounded-lg hover:shadow-md transition-all duration-300 py-10 px-2 flex flex-col items-center justify-end`}
      >
        <h1
          className="bg-secondary/20 rounded-md px-3 py-1 hover:bg-secondary/40 transition-all duration-200  cursor-pointer"
          title="Click to Copy"
          onClick={() => {
            navigator.clipboard.writeText(color);
          }}
        >
          {color}
        </h1>
      </div>
    </>
  );
};

export default Body;
