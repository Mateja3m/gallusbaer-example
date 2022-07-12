import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Immobilien from "./components/Immobilien";
import Uber from "./components/Uber";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/immobilien" element={<Immobilien />} />
        <Route path="/uber" element={<Uber />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
