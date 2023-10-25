import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
  <>
    <section className="home">
      <div>
        <motion.h1 {...options}>MF BURGER WALA</motion.h1>
        {/* <p>Where the Real Burgers are</p> */}
        <motion.p {...options} transition={{ delay: 0.2 }}>
          Life is Better with Burger
        </motion.p>
      </div>

      <motion.a
        href="#menu"
        initial={{ y: "-100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        View Menu
      </motion.a>
    </section>

    <Founder />
    <Menu />
  </>
  );
};

export default Home;
