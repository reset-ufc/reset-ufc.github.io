import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamInterface from "./components/TeamCollection";

function App() {

  return (
    <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/members" element={<TeamInterface/>}/>
    </Routes>
  )
}

export default App;
