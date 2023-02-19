import { Routes, Route } from "react-router-dom";
import Nav, { NavProps } from "./components/organisms/Nav/Nav";
import Home from "./pages/Home/Home";
import DrinkDetail from "./pages/DrinkDetail/DrinkDetail";
import DrinkSearchByName from "./pages/DrinkSearchByName/DrinkSearchByName";
import HomeIcon from "./assets/svg/home.svg";
import SearchIcon from "./assets/svg/search.svg";
import "./App.scss";

const navItems: NavProps["items"] = [
  { path: "/", icon: HomeIcon, label: "Home" },
  {
    path: "/drinks/search-by-name",
    icon: SearchIcon,
    label: "Search for a Drink",
  },
];

function App() {
  return (
    <div className="App">
      <Nav items={navItems} className="nav" />
      <Routes>
        <Route path="/" element={<Home className="page" />} />
        <Route
          path="/drinks/search-by-name"
          element={<DrinkSearchByName className="page" />}
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
