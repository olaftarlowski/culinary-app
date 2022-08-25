import { useEffect, useState } from "react";
import api from "../services/api";

import { DataList } from "./";

const Api = () => {
  const [airtableData, setAirtableData] = useState([]);

  const getDataHandler = () => {
    api.getData().then((data) => setAirtableData(data.records));
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  return (
    <div>
      <DataList data={airtableData} />
    </div>
  );
};

export default Api;
