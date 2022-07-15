import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Liked from "./pages/Liked";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="liked" element={<Liked />} />
      </Routes>
    </BrowserRouter>
  );
}
