import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Slider from "./components/slider/Slider";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkMode;
  return (
  <div style= {{backgroundColor:darkmode ? "#222" : "white" , color: darkmode && "white"
  }}
  >
    <Toggle/>
    <Intro/> 
    <About/>
    <Slider/>
    <Contact/>
  </div>
  );
};

export default App;  


 