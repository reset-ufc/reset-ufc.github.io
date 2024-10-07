import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamInterface from "./pages/TeamCollection";
import ProfilePage from "./components/ProfilePage";
import NewsCardList from "./components/NewsSection";
import NewsDetail from "./components/NewsDetail";
import ToolsSection from "./pages/Tools";

function App() {

  return (
    <Routes>
      <Route path="*" element={<Home/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/members" element={<TeamInterface/>}/>
      <Route path="/members/:name" element={<ProfilePage />} />
      <Route path="/news" element={<NewsCardList />} />
      <Route path="/tools" element={<ToolsSection />}/>
      <Route path="/news/:title" element={<NewsDetail />} />
    </Routes>
  )
}

export default App;
