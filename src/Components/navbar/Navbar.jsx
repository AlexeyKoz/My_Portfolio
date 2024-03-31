import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">

        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Personal Portfolio Website
        </motion.span>

        <div className="social" >

          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}>
            <a href="https://www.facebook.com/profile.php?id=100004402485403" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.png" alt="" />
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}>
            <a href="https://www.linkedin.com/in/alexey-kozlov-full-stack-developer" target="_blank" rel="noopener noreferrer">
              <img src="/linkedIn.png" alt="" /></a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}>
            <a href="https://www.youtube.com/@AlexeyKozlov1990" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.png" alt="" /></a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;