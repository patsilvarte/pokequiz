import "./App.css";
import Footer from "./components/general/Footer";
import { Wall } from "./components/general/Wall";
import RecyclingArea from "./components/RecyclingArea";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wall>
          <>
            <RecyclingArea />
            <Footer />
          </>
        </Wall>
      </header>
    </div>
  );
}

export default App;
