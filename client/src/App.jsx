import Chatbox from "./components/Chatbox";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./App.css";

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
