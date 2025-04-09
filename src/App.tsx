import "./App.css";
import Footer from "./components/general/Footer";
import { Wall } from "./components/general/Wall";
import LabArea from "./components/LabArea";
import { LeaderBoardProvider } from "./context/LeaderBoardProvider";
import { LevelProvider } from "./context/LevelProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wall>
          <LevelProvider>
            <LeaderBoardProvider>
              <LabArea />
              <Footer />
            </LeaderBoardProvider>
          </LevelProvider>
        </Wall>
      </header>
    </div>
  );
}

export default App;
