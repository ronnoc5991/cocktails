import { Routes, Route } from "react-router-dom";
import Nav from "./components/organisms/Nav/Nav";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import DrinkDetail from "./pages/DrinkDetail/DrinkDetail";
import "./App.css";

// create a drink card display?
// or can there be a card display?
// pass cards in, it displays them in a carousel?

// fix the double api call in search
// fix the api call in home

function App() {
  return (
    <div className="App">
      <Nav className="nav" />
      <Routes>
        <Route path="/" element={<Home className="page" />} />
        <Route path="/search" element={<Search className="page" />} />
        <Route
          path="/drink/:idDrink"
          element={<DrinkDetail className="page" />}
        />
      </Routes>
    </div>
  );
}

export default App;
