import axios from "axios";

const API_KEY = `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`;
const API_URL = "https://api.airtable.com/v0/app4Fn5LIMlVBvrA3";

const getData = async () => {
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: API_KEY,
  };

  const res = await axios.get(`${API_URL}/recipes`).catch((error) => {
    console.log(error);
  });

  return res.data;
};

const postData = () => {
  console.log("red");
};

const apiRequest = { getData, postData };

export default apiRequest;
