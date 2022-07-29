import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Camera } from "./components/camera/Camera";
import { NotFound } from "./components/error/NotFound";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
