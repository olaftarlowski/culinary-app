import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Api } from "./components";
import { Home, About } from "./pages";
import { Header } from "./components/layout";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h2>App component</h2>
        <Header />
        {/* <button onClick={asd}>lik</button> */}
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<Api />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
