import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Immobilien from "./Immobilien";
import Uber from "./Uber";
import Projekte from "./Projekte";
import Losungen from "./Losungen";
import Kontakt from "./Kontakt";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Immobilien />} />
        <Route path="/uber" element={<Uber />} />
        <Route path="/projekte" element={<Projekte />} />
        <Route path="/losungen" element={<Losungen />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
