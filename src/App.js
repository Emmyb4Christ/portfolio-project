import "./App.css";
import "./Home.css";
import "./Skills.css";
import Home from "./FunctionalComponents/Home";
import NavBar from "./FunctionalComponents/NavBar";
import SubHead from "./FunctionalComponents/SubHead";
import Skills from "./FunctionalComponents/Skills";
import About from "./FunctionalComponents/About";
import Footer from "./FunctionalComponents/Footer";
import BottomFooter from "./FunctionalComponents/BottomFooter";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Home />

      <SubHead />

      <Skills />

      <About />

      <Footer />
      <BottomFooter />
    </div>
  );
}

export default App;
