import React from "react";
import "../../Assets/CSS/Pages.css"

function training() {
  return (
    <>
      <section className="calender_heading">
        <div className="heading_content_calender">
          <div className="top_heading">
            <h1>Training Calendar</h1>
          </div>
          <div className="calender_search">
            <input type="search" name="" id="" />
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
                Live Online <span>70</span>
              </p>
            </div>
            <div className="filter_location">
            <h3>Location</h3>  
              <p>
                India <span>7</span>
              </p>

            </div>
          </div>
        </div>

        <div className="certificate_sold">
          <div className="certificate_card">
            <div className="title_content">
              <div className="img">
                <img src="https://a1306064c4.cbaul-cdnwnd.com/a24fec02d939da8df4c9f6078191c880/200000235-6bd8a6bd8d/450/003-quality-control.webp?ph=a1306064c4" alt="not presernt" />
              </div>
              <div className="card_main_title">
                <h3>QUALITY MANAGEMENT</h3>
                <h2>Lean Six Sigma Black Belt certification</h2>
              </div>
            </div>
            <div className="description_content">
              <p>
                Delivery <span>Live Online</span>
              </p>
              <p>
                Starts on <span>Apr 23, 2024</span>
              </p>
              <p>
                Ends on <span>Apr 26, 2024</span>
              </p>
              <p>
                Time zone <span>America/New_York</span>
              </p>
            </div>

            <div className="price_enroll">
              <div className="certificate_price">
                <span>$1,099</span>
                <span>$999</span>
              </div>
              <div className="enroll_btn">
                <button>Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default training;
