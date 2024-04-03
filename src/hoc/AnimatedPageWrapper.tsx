import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimatedPageWrapper = ({ children }: { children: ReactNode }) => {
  const animations = {
    initial: { opacity: 0.5, x: 4, transition: { duration: 0.5 } },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -4, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;
