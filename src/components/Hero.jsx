import React,{useState} from "react";
import "../css/Hero.css";
import video from '../assets/bg.mp4'
import { HiLocationMarker } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { GrRestroomMen } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";




const Hero = () => {
   const [openOptions, setOpenOptions] = useState(false);
   const [options, setOptions] = useState({
     adult: 1,
     children: 0,
     room: 1,
   });
   const handleOption = (name, operation) => {
     setOptions((prev) => {
       return {
         ...prev,
         [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
       };
     });
   };


   const [selectedDate, setSelectedDate] = useState("");

   const handleDateChange = (event) => {
     setSelectedDate(event.target.value);
   };

  
  return (
    <section className="heroMain">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContentContainer">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search Your Holiday</h1>
        </div>
        <div className="card grid">
          <div className="destinationInput">
            <label className="cardInputLable" htmlFor="city">
              <HiLocationMarker />
              Where are you going?
            </label>
            <input type="text" placeholder="Enter Name Here... " />
          </div>
          <div className="dateInput">
            <label className="cardInputLable" htmlFor="date">
              <MdDateRange />
              Search Dates
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              placeholder="Enter Name Here... "
            />
          </div>
          <div className="dateInput">
            <label className="cardInputLable" htmlFor="date">
              <GrRestroomMen />
              Add Details
            </label>
            <div className="headerSearchItem">
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.room <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button className="btn btn-srch">
            <FiSearch /> Search
          </button>
        </div>
        <div className="textDiv iconsLast">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </section>
  );
};

export default Hero;
