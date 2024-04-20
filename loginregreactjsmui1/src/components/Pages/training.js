import React, { useEffect, useState } from "react";
import { getTimezone } from "countries-and-timezones"; // Import countries-and-timezones
import "../../Assets/CSS/Pages.css";
import { useTrainingCalenderQuery } from "../../services/userAuthApi";
import { useSelector } from "react-redux";
import UserLogin from "../../pages/auth/UserLogin";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function Training() {
  const [trainingData, setTrainingData] = useState(null);
  const { data: calenderData, error, isLoading } = useTrainingCalenderQuery();
  const [liveOnlineCount, setLiveOnlineCount] = useState(0);
  const [locationCounts, setLocationCounts] = useState({});
  const { access_token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (calenderData) {
      setTrainingData(calenderData);
      const trainingOnlineCount = calenderData.reduce((acc, trainingItem) => {
        if (trainingItem.delivery === "Live online") {
          return acc + 1;
        }
        return acc;
      }, 0);
      setLiveOnlineCount(trainingOnlineCount);

      const locationCountsObj = calenderData.reduce((acc, trainingItem) => {
        const timeZone = trainingItem.time_zone;
        const country = getTimezoneCountry(timeZone);
        acc[country] = (acc[timeZone] || 0) + 1;
        return acc;
      }, {});
      setLocationCounts(locationCountsObj);
    }
  }, [calenderData]);

  const getTimezoneCountry = (timeZone) => {
    const allTimezones = getTimezone();
    for (const tz in allTimezones) {
      if (allTimezones[tz].name === timeZone) {
        return allTimezones[tz].country;
      }
    }
    return timeZone;
  };

  return (
    <>
      <section className="calender_heading">
        <div className="heading_content_calender">
          <div className="top_heading">
            <h1>Training Calendar</h1>
          </div>
          <div className="calender_search">
            <input
              type="search"
              placeholder="Find something to learn today..."
              name=""
              id=""
            />
            <button>Search</button>
          </div>
        </div>
      </section>
      <section className="calender_main_content">
        <div className="filter_section">
          <div className="filter_content">
            <div className="filter_top_content">
              <h3>DELIVERY</h3>
              <p>
                Live Online <span>{liveOnlineCount}</span>
              </p>
            </div>
            <div className="filter_location border_divider">
              <h3>Location</h3>
              {Object.entries(locationCounts).map(([country, count]) => (
                <p key={country}>
                  {country} <span>{count}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {trainingData && (
          <div className="certificate_sold">
            {trainingData.map((trainingItem) => (
              <div className="certificate_card" key={trainingItem.id}>
                <div className="title_content border-bottom">
                  <div className="img">
                    <img
                      src={`http://127.0.0.1:8000/${trainingItem.courses.image}`}
                      alt="Training"
                    />
                  </div>
                  <div className="card_main_title">
                    <h3>{trainingItem.courses.title}</h3>
                    <h2>{trainingItem.certificate.certificate_title}</h2>
                  </div>
                </div>
                <div className="description_content border-bottom">
                  <p>
                    Delivery{" "}
                    <span className="live_online">{trainingItem.delivery}</span>
                  </p>
                  <p>
                    Starts on <span>{trainingItem.start_date}</span>
                  </p>
                  <p>
                    Ends on <span>{trainingItem.end_date}</span>
                  </p>
                  <p>
                    Time zone <span>{trainingItem.time_zone}</span>
                  </p>
                </div>
                <div className="price_enroll">
                  <div className="certificate_price">
                    <span className="mrp_price">${trainingItem.MRP}</span>
                    <span className="price">${trainingItem.price}</span>
                  </div>
                  <div className="enroll_btn">
                    {/* {access_token ? (
                      <button>Enroll Now</button>
                    ) : (
                      <Navigate to="/login" />
                    )} */}
                    <button>Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Training;
