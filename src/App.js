import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, StudyMaterialPage,Presidents } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/studymaterial" element={<StudyMaterialPage />} />
        <Route path="/presidents" element={<Presidents />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
