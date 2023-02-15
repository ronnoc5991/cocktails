import { Routes, Route } from "react-router-dom";
import Nav from "./components/organisms/Nav/Nav";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import DrinkDetail from "./pages/DrinkDetail/DrinkDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/drink/:idDrink" element={<DrinkDetail />} />
      </Routes>
    </div>
  );
}

export default App;
