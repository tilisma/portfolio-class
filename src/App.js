import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Contact />
    </>
  );
}

export default App;
