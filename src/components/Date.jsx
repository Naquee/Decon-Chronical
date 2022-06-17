import React from "react";

const Dates = () => {
  const d = new Date();
  const weekday = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  const Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = weekday[d.getDay()];
  const month = Month[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();
  var currentOffset = d.getTimezoneOffset();

  var ISTOffset = 330;

  var ISTTime = new Date(d.getTime() + (ISTOffset + currentOffset) * 60000);

  var hours = ISTTime.getHours() % 12 || 12;
  var minutes = ISTTime.getMinutes();
  var AMPM = hours > 12 || hours === 24 ? "PM" : "AM";

  return (
    <div style={{ margin: "auto" }}>
      <b style={{ color: "#222222", fontSize: "small", fontWeight: "bold" }}>
        {day}, {month} {date} , {year} | Last Update : {hours}:{minutes} {AMPM}{" "}
        IST
      </b>
    </div>
  );
};

export default Dates;
