import { Route, Routes } from "react-router-dom";
import "./App.css";
import OffcanvasExample from "./Components/NavBar";
import Plans from "./Components/Plans";
import Home from "./screens/Home";
import Guide from "./screens/Guide";
import CarRent from "./screens/CarRent";
import PersonalDriver from "./screens/PersonalDriver";
import Annoncement from "./screens/Annoncement";
// import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <OffcanvasExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Guide" element={<Guide />} />
        <Route path="/CarRent" element={<CarRent />} />
        <Route path="/PersonalDriver" element={<PersonalDriver />} />
        <Route path="/Annoncement" element={<Annoncement />} />
      </Routes>
    </>
  );
}

export default App;
