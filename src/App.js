import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/Home";
import LandingPage from "./components/landing/LandingPage";
import SobreMi from "./components/about/SobreMi";
import Form from "./components/form/Form";
import CountryDetail from "./components/details/CountryDetail";
import NotFound from "./components/notfound/NotFound";

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
