import React, { Component } from "react";
import Wrapper from "./Wrapper";
import data from "../utils/data.json";

class PingLacson extends Component {
  renderBills = () => {
    let elements = [];
    let congress = "";
    let allowCongressRender = false;

    data["Lacson, Panfilo M."].forEach((bill) => {
      if (congress !== bill.congress) {
        congress = bill.congress;
        allowCongressRender = true;
      }

      if (allowCongressRender) {
        elements.push(
          <p>
            <span className="text-center my-5 d-block fw-bold">{congress}</span>
            <a href={bill.bill_link} target="_blank" rel="noreferrer">
              {bill.bill_name}
            </a>{" "}
            - {bill.bill_desc}
          </p>
        );
      } else {
        elements.push(
          <p>
            <a href={bill.bill_link} target="_blank" rel="noreferrer">
              {bill.bill_name}
            </a>{" "}
            - {bill.bill_desc}
          </p>
        );
      }

      allowCongressRender = false;
    });

    return elements;
  };

  render() {
    return (
      <Wrapper location={this.props.location.pathname}>
        <h3 className="mb-3">Lacson, Panfilo M.</h3>
        <h6 className="mb-5">Running for: President</h6>
        <div className="intro">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Panfilo_Lacson_PARR_cropped.jpg"
            alt="ping-lacson"
            style={{
              borderRadius: 100,
              height: 125,
              width: 125,
              marginRight: 25,
              border: "2px solid #0035A9",
            }}
          />
          <div>
            <p>
              Panfilo "Ping" Morena Lacson Sr. (Tagalog pronunciation: born June
              1, 1948) is a Filipino politician and former police general
              serving as a Senator since 2016, and previously from 2001 to 2013.
              He was the Director General of the Philippine National Police
              (PNP) from 1999 to 2001, and was a candidate in the 2004
              presidential election.
            </p>
            <p>Source: Wikipedia</p>
          </div>
        </div>
        <div className="mt-5">
          <h4 className="text-center mb-5">Authored and Co-Authored Bills</h4>
          {this.renderBills()}
        </div>
      </Wrapper>
    );
  }
}

export default PingLacson;
