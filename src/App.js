
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, StudyMaterialPage } from "./pages";
import { Footer, Header } from "./components";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route to="/" element={<HomePage />} />
        <Route to="/studymaterial" element={<StudyMaterialPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
