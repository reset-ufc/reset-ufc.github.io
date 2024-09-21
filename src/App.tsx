import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamInterface from "./components/TeamCollection";
import ProfilePage from "./components/ProfilePage";

function App() {

  return (
    <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/members" element={<TeamInterface/>}/>
      <Route path="/members/:name" element={<ProfilePage />} />
    </Routes>
  )
}

export default App;
