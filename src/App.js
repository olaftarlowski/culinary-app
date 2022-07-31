import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataList from "./components/DataList";
import { default as api } from "./api/api";
import "./App.css";

const App = () => {
  const [airtableData, setAirtableData] = useState([]);

  const getDataHandler = () => {
    api.getData().then((data) => setAirtableData(data.records));
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  return (
    <Router>
      <div className="App">
        <h2>App component</h2>
        {/* <button onClick={asd}>lik</button> */}
        <div>
          <Routes>
            <Route path="/" element={<DataList data={airtableData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
