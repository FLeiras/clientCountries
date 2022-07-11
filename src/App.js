import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import LandingPage from "./components/LandingPage";
import SobreMi from "./components/SobreMi";
import Form from "./components/Form";
import CountryDetail from "./components/CountryDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/:id" element={<CountryDetail />} />
        <Route exact path="/about" element={<SobreMi />} />
        <Route exact path="/post" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
