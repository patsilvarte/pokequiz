import "./App.css";
import Footer from "./components/general/Footer";
import { Wall } from "./components/general/Wall";
import LabArea from "./components/LabArea";
import { LevelProvider } from "./context/LevelProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wall>
          <LevelProvider>
            <LabArea />
            <Footer />
          </LevelProvider>
        </Wall>
      </header>
    </div>
  );
}

export default App;
