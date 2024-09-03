import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
