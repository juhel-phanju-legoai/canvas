import "./App.css";
import CanvasV3 from "./features/canvas/Canvas";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        userSelect: "none",
      }}
    >
      <CanvasV3 />
    </div>
  );
}

export default App;
