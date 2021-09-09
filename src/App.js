import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Project from "./components/project/Project";
import Members from "./components/members/Members";

//import scsss
import './app.scss';

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Home/>
        <Project/>
        <Members/>
      </div>
    </div>
  );
}

export default App;
