import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "HOCs/Main";
import Home from "pages/Home";
import Liked from "pages/Liked";
import { Provider } from "context";

export default function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="liked" element={<Liked />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
