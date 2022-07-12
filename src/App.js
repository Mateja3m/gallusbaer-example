import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Immobilien from "./components/Immobilien";
import Projekte from "./components/Projekte";
import Uber from "./components/Uber";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Immobilien />} />
        <Route path="/uber" element={<Uber />} />
        <Route path="/projekte" element={<Projekte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
