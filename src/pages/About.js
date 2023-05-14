import React from "react";
import { motion, useScroll} from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <h3>I am Utkarsh Dixit</h3>
            <p>I am currently in pre final year of B tech with CS as my branch.</p>
            <p>I have a good knowledge about data structures and algorithm.</p>
            <p>I solved 450+ DSA problems on leetcode using java as my programming language. </p>
            <p>In web developement, I also have a good knowledge about html, css, javascript, reactJS, bootstrap, and nodeJS.
            </p>
          </article>
        </>
      </div>
    </>
  );
};

export default About;
