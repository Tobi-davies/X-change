import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [time, updateTime] = useState("");
  const [year, updateYear] = useState("");

  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Saturday"];
  let monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const setTime = () => {
    let today = new Date();
    let day = weekday[today.getDay()];
    let month = monthList[today.getMonth()];
    let date = today.getDate();
    let hour = formatHour(today.getHours());
    let minute = formatHour(today.getMinutes());
    let seconds = formatHour(today.getSeconds());
    let year = today.getFullYear();

    let dateYear = `${day} ${month} ${date}, ${year}`;
    let time = `${hour} : ${minute} : ${seconds}`;
    updateTime(time);
    updateYear(dateYear);
  };

  const formatHour = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  setInterval(() => {
    setTime();
  }, 1000);

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <span className="X">X</span>
          <span className="change">change</span>
        </div>
        <div className="time">
          <p className="year">{year}</p>
          <p className="difftime">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
