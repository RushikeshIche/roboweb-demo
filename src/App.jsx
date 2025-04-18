import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/heroanimation";
function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div>
        <Hero />
        <About />
      </div>
      <div>
        <Solutions />
      </div>
      <div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
