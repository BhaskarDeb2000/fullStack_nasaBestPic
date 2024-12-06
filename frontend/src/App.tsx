import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CircularProgress } from "@mui/material";
import "./App.css";

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
  const [data, setData] = useState<Inasa | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  useEffect(() => {
    const fetchData = async (selectedDate: string) => {
      try {
        const response = await axios.get<Inasa>(
          "https://nasa-backend-pxlzgzim1-orghodebs-projects.vercel.app/nasa",
          {
            params: { date: selectedDate },
          }
        );
        setData(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (value) {
      fetchData(value.format("YYYY-MM-DD"));
    }
  }, [value]);

  return (
    <div
      className="webpage"
      style={{
        backgroundImage: data?.hdurl
          ? `url(${data.hdurl})`
          : data?.url
          ? `url(${data.url})`
          : "linear-gradient(to bottom, #000, #333)",
      }}
    >
      <div className="datepicker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <h1>NASA's Best Picture of the Day</h1>
            <DatePicker
              label="Select a Date"
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": { borderColor: "white" },
                },
                "& .MuiSvgIcon-root": { color: "white" },
              }}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              disableFuture
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>

      <div style={{ flex: 1 }} />
      {loading ? (
        <div className="loading">
          <CircularProgress sx={{ color: "white" }} />
        </div>
      ) : error ? (
        <div className="error">
          <p>Error: {error}</p>
        </div>
      ) : data ? (
        <div className="data">
          <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
            {data.title}
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
            {data.explanation}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default App;
