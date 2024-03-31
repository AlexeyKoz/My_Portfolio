import Navbar from "./Components/navbar/Navbar";
import "./app.scss";
import Hero from "./Components/hero/Hero";
import Contact from "./Components/contact/Contact";
import Cursor from "./Components/cursor/Cursor";


const App = () => {

  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;