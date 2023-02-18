import { Routes, Route } from "react-router-dom";
import Nav, { NavProps } from "./components/organisms/Nav/Nav";
import Home from "./pages/Home/Home";
import DrinkDetail from "./pages/DrinkDetail/DrinkDetail";
import DrinkSearch from "./pages/DrinkSearch/DrinkSearch";
import "./App.scss";

// fix the double api call in search
// fix the api call in home

// can implement ingredient search route
// and ingredient card display
// and ingredient card

const navItems: NavProps["items"] = [
  { path: "/", label: "Home" },
  { path: "/drink-search", label: "Search for a Drink" },
];

function App() {
  return (
    <div className="App">
      <Nav items={navItems} className="nav" />
      <Routes>
        <Route path="/" element={<Home className="page" />} />
        <Route
          path="/drink-search"
          element={<DrinkSearch className="page" />}
        />
        <Route
          path="/drinks/:idDrink"
          element={<DrinkDetail className="page" />}
        />
      </Routes>
    </div>
  );
}

export default App;
