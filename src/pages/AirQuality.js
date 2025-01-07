import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AirQuality = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const API_KEY = 'a7b95c2f-9821-4917-a4ec-e436f51d44f3'; // API key

  // Function to get air quality background color
  const getAQIBackgroundColor = (aqi) => {
    if (aqi <= 50) return 'bg-green-400'; // Good
    if (aqi <= 100) return 'bg-yellow-400'; // Neutral
    return 'bg-red-400'; // Bad
  };

  // Function to get air quality emoticon
  const getEmoticon = (aqi) => {
    if (aqi <= 50) return 'ヽ(・ε・｀)'; // Happy
    if (aqi <= 100) return '(´・ω・`)'; // Neutral
    return 'ᕙ(⇀‸↼‶)ᕗ'; // Sad
  };

  useEffect(() => {
    // Fetch weather and air quality data for Jakarta
    axios
      .get('http://api.airvisual.com/v2/city', {
        params: { city: 'Jakarta', state: 'Jakarta', country: 'Indonesia', key: API_KEY },
      })
      .then((response) => setWeatherData(response.data.data))
      .catch(() => setError('Error fetching weather data'));
  }, []);

  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!weatherData) return <div className="text-center">Loading...</div>;

  const { city, current } = weatherData;
  const aqi = current.pollution.aqius;

  return (
    <div
      className="max-w-screen-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg"
      style={{ width: '90%', height: '200%' }}
    >
      <div className="flex flex-col items-center justify-between">
        {/* Top Row: City Name and Air Quality Emoticon */}
        <div className="flex justify-between w-full items-center mb-6">
          <div className="text-4xl font-bold">{city}</div>
          <div
            className={`w-40 h-20 flex items-center justify-center rounded-full ${getAQIBackgroundColor(
              aqi
            )}`}
          >
              <span className="text-4xl">{getEmoticon(aqi)}</span>
            </div>
          </div>

        {/* Middle Section: Google Maps */}
        <div className="flex justify-center w-full mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5363291992203!2d106.84656137499019!3d-6.192735693794915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f442e36e0f69%3A0x5ff33d732b34d6a5!2sThousand%20Islands%20National%20Park%20Office!5e0!3m2!1sen!2sid!4v1736232997858!5m2!1sen!2sid"
            width="90%"
            height="200"
            style={{ border: '0', borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
            title="Jakarta Map"
          />
        </div>

        {/* Bottom Section: Weather and Air Quality */}
        <div className="grid grid-cols-3 gap-4 mt-8 w-full">
          <div className={`p-4 rounded-lg ${getAQIBackgroundColor(aqi)}`}>
            <p className="text-lg text-white font-bold">Air Quality (US)</p>
            <p className="text-xl text-white font-semibold">{current.pollution.aqius}</p>
          </div>
          <div className="p-4 bg-blue-500 rounded-lg">
            <p className="text-lg text-white font-bold">Air Quality (CN)</p>
            <p className="text-xl text-white font-semibold">{current.pollution.aqicn}</p>
          </div>
          <div className="p-4 bg-purple-500 rounded-lg">
            <p className="text-lg text-white font-bold">Main Pollutant</p>
            <p className="text-xl text-white font-semibold">{current.pollution.mainus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
