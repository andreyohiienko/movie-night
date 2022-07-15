import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="liked" element={<div>liked</div>} />
      </Routes>
    </BrowserRouter>
  );
}
