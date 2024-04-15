import { useEffect, useState } from "react";

import { MdOutlineWbSunny } from "react-icons/md";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { WiDayShowers } from "react-icons/wi";
import { MdOutlineNightlight } from "react-icons/md";
import { WiNightAltCloudy } from "react-icons/wi";
import { WiNightAltRainMix } from "react-icons/wi";
import { WiDayCloudyWindy } from "react-icons/wi";
import { WiNightAltCloudyWindy } from "react-icons/wi";

import { convDate2, convDate3 } from "../../../../Utils/Time";

import axios from "axios";

function WeatherComponent() {
  const date = new Date();
  const initialIcon =
    date.getHours() < 5 || date.getHours() > 18 ? (
      <MdOutlineNightlight size="25px" />
    ) : (
      <MdOutlineWbSunny size="25px" />
    );

  const showersIcon =
    date.getHours() < 5 || date.getHours() > 18 ? (
      <WiNightAltRainMix size="25px" />
    ) : (
      <WiDayShowers size="25px" />
    );

  const cloudyIcon =
    date.getHours() < 5 || date.getHours() > 18 ? (
      <WiNightAltCloudy size="25px" />
    ) : (
      <IoPartlySunnyOutline size="25px" />
    );

  const windyIcon =
    date.getHours() < 5 || date.getHours() > 18 ? (
      <WiNightAltCloudyWindy size="25px" />
    ) : (
      <WiDayCloudyWindy size="25px" />
    );

  const [location, setLocation] = useState("Nairobi");
  const [weather, setWeather] = useState({ icon: initialIcon });

  const convertedDate2 = convDate2(date);
  const convertedDate3 = convDate3(date);
  const apiKey = "65d30256d3839498439640msv2b794f";

  useEffect(() => {
    const showWeather = async (pos) => {
      try {
        const response = await axios({
          url: `https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&daily=weathercode,windspeed_10m_max,temperature_2m_max,temperature_2m_min,rain_sum,showers_sum&timezone=Africa%2FCairo&start_date=${convertedDate2}&end_date=${convertedDate2}`,
        });

        const locationResponse = await axios({
          url: `https://geocode.maps.co/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&api_key=${apiKey}`,
        });

        const loc = locationResponse.data.address.city
          ? locationResponse.data.address.city
          : locationResponse.data.address.town
          ? locationResponse.data.address.town
          : locationResponse.data.address.state
          ? locationResponse.data.address.state
          : locationResponse.data.address.country;

        setLocation(loc);

        setWeather(() => {
          const {
            rain_sum,
            temperature_2m_max,
            windspeed_10m_max,
            weathercode,
          } = response.data.daily;

          const ConvWeatherCode =
            weathercode < 4 ? weathercode : Math.floor(weathercode / 25);

          let icon = <></>;

          switch (true) {
            case rain_sum[0] > 4:
              icon = showersIcon;
              break;

            case windspeed_10m_max[0] > 20:
              icon = windyIcon;
              break;

            case ConvWeatherCode > 2 || temperature_2m_max[0] < 27:
              icon = cloudyIcon;
              break;

            default:
              icon = initialIcon;
          }
          return { icon: icon, data: response.data.daily };
        });
      } catch (error) {
        return;
      }

      return pos;
    };

    switch (true) {
      default:
        showWeather({ coords: { latitude: "-1.286", longitude: "36.817" } });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        showWeather(position)
      );
    }
  }, []);
  return (
    <div className="py-2 px-4 text-gray-600-2 text-[15px] font-bold hidden sm:flex items-center gap-4 bg-white rounded-lg shadow-lg">
      <div className="flex gap-2 items-center">
        <div>{weather.icon}</div>
        <p>
          {" "}
          {weather.data && weather.data.temperature_2m_max
            ? date.getHours() < 5 || date.getHours() > 18
              ? weather.data.temperature_2m_min[0]
              : weather.data.temperature_2m_max[0]
            : 22}{" "}
          °C{" "}
        </p>
        <p className="text-xs text-gray-200-2">{location}</p>
      </div>
      <hr className="border-[1px] border-bright-gray h-6" />
      <div>{convertedDate3}</div>
    </div>
  );
}

export default WeatherComponent;
