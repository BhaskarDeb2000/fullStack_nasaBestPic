import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import SearchAppBar from "./Components/AppBar";
interface Inasa {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

const App = () => {
  const [data, setData] = useState<Inasa>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Inasa>("http://localhost:5001/");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        const axiosError = error as AxiosError;
        setError(axiosError.message);
        console.error(axiosError);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundImage: `url(${data?.hdurl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SearchAppBar />
      {error ? (
        <div
          style={{
            padding: "20px",
            margin: "auto",
            border: "2px solid red",
            borderRadius: "10px",
            background: "rgba(255, 0, 0, 0.2)",
          }}
        >
          <p>Error: {error}</p>
        </div>
      ) : data ? (
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(42,42,42,0) 0%, rgba(42,42,42,0.9) 40%)",
            color: "white",
            padding: "90px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
            {data.title}
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            {data.explanation}
          </p>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            color: "white",
            margin: "auto",
            fontSize: "1.5rem",
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default App;
