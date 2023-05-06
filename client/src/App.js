import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import { DetectPCOS } from './components/DetectPCOS';
// import {PeriodTracker} from './components/PeriodTracker'
// import { YogaPlanner } from './components/YogaPlanner';
// import {DietPlanner} from './components/DietPlanner'
function App() {


  
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      {/* <DetectPCOS /> */}
      {/* <YogaPlanner /> */}
      {/* <PeriodTracker /> */}
      {/* <DietPlanner /> */}
      <Footer />
    </div>
  );
}

export default App;