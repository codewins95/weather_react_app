import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherApi } from "../redux/Weather.slice";

const Weather = () => {
  const weatherData = useSelector((state) => state.weather.data);
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  useEffect(() => {
    dispatch(weatherApi());
  }, [dispatch]);

  console.log(weatherData.weather[0]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r ">
        <div className="w-[600px] p-5 bg-slate-300">
          <h1 className="text-4xl font-bold mb-8 text-center">Weather App</h1>
          <form>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              className="p-3 w-full md:w-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              Get Weather
            </button>
          </form>

          {/* {error && <p className="text-red-500">{error}</p>} */}

          {weatherData && (
            <div className=" text-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full w-100">
              <h3 className="text-2xl font-semibold mb-2">
                {weatherData.name}
              </h3>
              <p className="text-lg capitalize">
                {weatherData.weather[0].description}
              </p>
              <p className="text-4xl font-bold my-4">
                {weatherData.main.temp} °C
              </p>
              <p>Humidity: {weatherData.main.humidity}%</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
