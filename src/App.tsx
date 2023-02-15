import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import DrinkDetail from "./pages/DrinkDetail/DrinkDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drink/:idDrink" element={<DrinkDetail />} />
      </Routes>
    </div>
  );
}

export default App;
