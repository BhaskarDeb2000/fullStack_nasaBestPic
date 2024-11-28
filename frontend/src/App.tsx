import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

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
  const [data, setData] = useState<Inasa[] | []>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Inasa[]>("http://localhost:5001/");
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
    <div>
      {error ? (
        <div>
          <p>{error}</p>
        </div>
      ) : (
        <div>
          {data?.map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <p>{item.date}</p>
              <p>{item.explanation}</p>
              {item.media_type === "image" && (
                <img src={item.url} alt={item.title} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
