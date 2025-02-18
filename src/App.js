import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  StudyMaterialPage,
  Presidents,
  PrimeMinisters,
  Emperors,
} from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studymaterial" element={<StudyMaterialPage />} />
          <Route path="/presidents" element={<Presidents />} />
          <Route path="/primeminsiter" element={<PrimeMinisters />} />
          <Route path="/emperors" element={<Emperors />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
