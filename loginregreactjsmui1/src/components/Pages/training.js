// Training.js
import React, { useEffect, useState } from "react";
import { getTimezone } from "countries-and-timezones";
import "../../Assets/CSS/Pages.css";
import { useTrainingCalenderQuery } from "../../services/userAuthApi";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { NavLink } from "react-router-dom";

function Training() {
  const [trainingData, setTrainingData] = useState(null);
  const { data: calenderData, error, isLoading } = useTrainingCalenderQuery();
  const [liveOnlineCount, setLiveOnlineCount] = useState(0);
  const [locationCounts, setLocationCounts] = useState({});
  const [courseCounts, setCourseCounts] = useState({});
  const [certificateCounts, setCertificateCounts] = useState({});
  const [startDateCounts, setStartDateCounts] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

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
        acc[country] = (acc[country] || 0) + 1;
        return acc;
      }, {});
      setLocationCounts(locationCountsObj);

      const courseCountsObj = calenderData.reduce((acc, trainingItem) => {
        const courseName = trainingItem.courses.title;
        acc[courseName] = (acc[courseName] || 0) + 1;
        return acc;
      }, {});
      setCourseCounts(courseCountsObj);

      const certificateCountsObj = calenderData.reduce((acc, trainingItem) => {
        const certificateName = trainingItem.certificate.certificate_title;
        acc[certificateName] = (acc[certificateName] || 0) + 1;
        return acc;
      }, {});
      setCertificateCounts(certificateCountsObj);

      const startDateCountsObj = calenderData.reduce((acc, trainingItem) => {
        const startDate = new Date(trainingItem.start_date);
        const month = startDate.toLocaleString("default", { month: "long" });
        const day = startDate.getDate();
        const year = startDate.getFullYear();
        const formattedDate = `${month} ${day}, ${year}`;
        acc[formattedDate] = (acc[formattedDate] || 0) + 1;
        return acc;
      }, {});
      setStartDateCounts(startDateCountsObj);
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

  const handleAddToCart = (trainingItem) => {
    dispatch(addToCart(trainingItem));
  };

  const filteredTrainingData = trainingData
    ? trainingData.filter(
        (trainingItem) =>
          trainingItem.courses.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          trainingItem.certificate.certificate_title
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
              value={searchQuery} // Controlled input for search
              onChange={handleSearchChange} // Handle search query change
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
            <div className="filter_location border_divider">
              <h3>Course</h3>
              {Object.entries(courseCounts).map(([course, count]) => (
                <p key={course}>
                  {course} <span>{count}</span>
                </p>
              ))}
            </div>
            <div className="filter_location border_divider">
              <h3>Certificate</h3>
              {Object.entries(certificateCounts).map(([certificate, count]) => (
                <p key={certificate}>
                  {certificate} <span>{count}</span>
                </p>
              ))}
            </div>
            <div className="filter_location border_divider">
              <h3>Starts</h3>
              {Object.entries(startDateCounts).map(([date, count]) => (
                <p key={date}>
                  {date} <span>{count}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {filteredTrainingData.length > 0 ? (
          <div className="certificate_sold">
            {filteredTrainingData.map((trainingItem) => (
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
                  <NavLink to="/dashboard/Checkout">

                    <button onClick={() => handleAddToCart(trainingItem)}>Enroll Now</button>
                  </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No training found</div>
        )}
      </section>
    </>
  );
}

export default Training;
