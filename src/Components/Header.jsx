import { motion } from "framer-motion";
import { Github, Pizza } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[8vh] bg-primary text-secondary py-3 flex flex-row items-center justify-around text-[20px] transition duration-200">
      <motion.div>
        <Pizza />
      </motion.div>
      <motion.h1
        whileHover={{
          letterSpacing: "1px",
        }}
        transition={{
          duration: 0.2,
        }}
        className="hover:text-secondary/70"
      >
        Choose IT
      </motion.h1>
      <motion.a
        whileHover={{
          rotate: 360,
        }}
        transition={{
          duration: 0.4,
        }}
        className="cursor-pointer"
        href="https://github.com/scorcism/Coolors-clone"
        target="_blank"
      >
        <Github />
      </motion.a>
    </div>
  );
};

export default Header;
