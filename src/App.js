// import "./App.scss";
import "./sass/style.scss";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Navbr from "./components/Navbr";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbr />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
