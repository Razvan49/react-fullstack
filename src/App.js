import "./App.css";
import Panel from "./Panel";
import PanelTwo from "./PanelTwo";

function App() {
  return (
    <div className="App">
      <Panel index={1} />
      <PanelTwo index={2} startingValue={10} />
    </div>
  );
}

export default App;
