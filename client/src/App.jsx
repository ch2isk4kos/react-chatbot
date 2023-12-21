import "./App.css";
import Chatbox from "./components/Chatbox";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
library.add(fas, faGithub, faLinkedinIn, faMedium);

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
