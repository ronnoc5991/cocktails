import { Routes, Route } from "react-router-dom";
import Nav from "./components/organisms/Nav/Nav";
import Home from "./pages/Home/Home";
import DrinkDetail from "./pages/DrinkDetail/DrinkDetail";
import DrinkSearch from "./pages/DrinkSearch/DrinkSearch";
import "./App.css";

// fix the double api call in search
// fix the api call in home

// can implement ingredient search route
// and ingredient card display
// and ingredient card

function App() {
  return (
    <div className="App">
      <Nav className="nav" />
      <Routes>
        <Route path="/" element={<Home className="page" />} />
        <Route
          path="/search/drinks"
          element={<DrinkSearch className="page" />}
        />
        <Route
          path="/drink/:idDrink"
          element={<DrinkDetail className="page" />}
        />
      </Routes>
    </div>
  );
}

export default App;
