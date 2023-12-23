import "./App.css";
import Chatbox from "./components/Chatbox";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faBars,
  faCircleInfo,
  faDownload,
  faFileExport,
  faGears,
  faMinus,
  faPlus,
  faTerminal,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faMedium,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faBars,
  faCircleInfo,
  faDownload,
  faFileExport,
  faGears,
  faGithub,
  faLinkedinIn,
  faMedium,
  faMinus,
  faPlus,
  faReact,
  faTerminal,
  faX
);

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <section>
        <Sidebar />
        <Chatbox />
      </section>
    </div>
  );
}

export default App;
