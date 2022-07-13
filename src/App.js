import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Immobilien from "./components/Immobilien";
import Uber from "./components/Uber";
import Projekte from "./components/Projekte";
import Losungen from "./components/Losungen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Immobilien />} />
        <Route path="/uber" element={<Uber />} />
        <Route path="/projekte" element={<Projekte />} />
        <Route path="/losungen" element={<Losungen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
