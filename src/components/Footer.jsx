import { border, Button } from "@chakra-ui/react";
import { borderRight } from "@mui/system";
import React from "react";
import { FaSistrix } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#f2f2f2",
          height: "200px",
          width: "100%",
          boxshadow:
            " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        <div>
          <input
            Placeholder="Search"
            style={{
              width: "500px",
              border: "1px solid #b6dcfc",
              height: "30px",
              marginTop: "20px",
              margin: "auto",
              type: "text",
            }}
          />
          <button
            style={{
              marginLeft: "20px",
              border: "1px solid black",
              width: "50px",
              backgroundColor: "#cecece",
              height: "30px",
            }}
          >
            <span>
              <FaSistrix style={{ colorScheme: "white" }} />
            </span>
          </button>
        </div>
        <div
          style={{
            margin: "10px 0 0 0",
            padding: "2px 10px 5px 2px",
            color: "#6D6D6D",
            textShadow: "1px 2px 2px #a5a5a5",
            fontSize: "12px",
            fontWeight: "700",
            borderRight: "1px dotted #CACACA",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <a style={{ textDecoration: "none" }}>HOME</a>
          <a style={{ textDecoration: "none" }}>ASIAN AGE</a>
          <a style={{ textDecoration: "none" }}>ANDRABHOOMI</a>
          <a style={{ textDecoration: "none" }}>FINANCIAL CHRONICLE</a>
          <a style={{ textDecoration: "none" }}>ABOUT US</a>
          <a style={{ textDecoration: "none" }}>CONTACT US</a>
          <a style={{ textDecoration: "none" }}>CLASSIFIEDS</a>
          <a style={{ textDecoration: "none" }}>BOOK CLASSIFIEDS</a>
          <a style={{ textDecoration: "none" }}>FEEDBACK</a>
          <a style={{ textDecoration: "none" }}>CAREERS</a>
          <a style={{ textDecoration: "none" }}>E-PAPER</a>
          <a style={{ textDecoration: "none" }}>PRIVACY POLICY</a>
        </div>
        <div style={{ marginTop: "20px" }}>
          <h3>Copyright © 2015 - 2022 Deccan Chronicle.</h3>
          <h3>Designed, Developed & Maintained By Daksham</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
