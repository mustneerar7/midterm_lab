import { useState } from "react";
import axios from "axios";

const useGetApi = () => {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState("");

  async function getData(url) {
    axios
      .get(url)
      .then(function (response) {
        setResponse(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }
  return { response, data, getData };
};

export { useGetApi };
