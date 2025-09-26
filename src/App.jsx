import Navbar from "./Components/navbar/Navbar";
import "./app.scss";
import Hero from "./Components/hero/Hero";
import Contact from "./Components/contact/Contact";
import Cursor from "./Components/cursor/Cursor";
import About from "./Components/about/About";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="app"
            >
                <Cursor />
                <section id="Homepage" className="hero-section">
                    <Navbar />
                    <Hero />
                </section>
                <section id="About" className="about-section">
                    <About />
                </section>
                <section id="Contact" className="contact-section">
                    <Contact />
                </section>
            </motion.div>
        </AnimatePresence>
    );
};

export default App;