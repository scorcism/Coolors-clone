import { motion } from "framer-motion";
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
    <div className="bg-primary/70 h-[92vh] w-full flex xs:flex-col md:flex-row justify-between">
      {colors.map((color, index) => (
        <Div key={color} color={color} index={index} />
      ))}
    </div>
  );
};

const Div = ({ color, index }) => {
  const [colorCopied, setColorCopied] = useState(false);

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.1,
          delay: index / 12,
        }}
        style={{
          backgroundColor: color,
        }}
        className={`w-full my-2 mx-2 rounded-lg hover:shadow-md transition-all duration-300 py-10 px-2 flex flex-col items-center justify-end`}
      >
        <div>
          {colorCopied && (
            <motion.p
              initial={{
                opacity: 0,
                y: +10,
              }}
              transition={{
                duration: 0.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              className="rounded-md px-1 py-[1px] text-center my-1"
            >
              copied
            </motion.p>
          )}
          <motion.h1
            whileTap={{
              scale: 1.2,
            }}
            whileHover={{
              border: "1px solid white",
            }}
            className={`bg-secondary/20 rounded-md px-3 py-1 hover:bg-secondary/40 transition-all duration-200 shadow-md  cursor-pointer text-black`}
            title="Click to Copy"
            onClick={() => {
              setColorCopied(true);
              navigator.clipboard.writeText(color);
              setTimeout(() => {
                setColorCopied(false);
              }, 1000);
            }}
          >
            {color}
          </motion.h1>
        </div>
      </motion.div>
    </>
  );
};

export default Body;
