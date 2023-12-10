import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Urheilijat from "./components/Urheilijat";
import Ylatunniste from "./components/Ylatunniste";
import LisaaUrheilija from "./components/LisaaUrheilija";
import MuokkaaUrheilija from "./components/MuokkaaUrheilija";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <Ylatunniste turvataso="keskisuuri" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Urheilijat />} />
              <Route path="/puhelintieto/lisaa" element={<LisaaUrheilija />} />
              <Route
                path="/puhelintieto/muokkaa/:id"
                element={<MuokkaaUrheilija />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
