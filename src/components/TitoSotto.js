import React, { Component } from "react";
import Wrapper from "./Wrapper";
import data from "../utils/data.json";

class TitoSotto extends Component {
  renderBills = () => {
    let elements = [];
    let congress = "";
    let allowCongressRender = false;

    data["Sotto III, Vicente C."].forEach((bill) => {
      if (congress !== bill.congress) {
        congress = bill.congress;
        allowCongressRender = true;
      }

      if (allowCongressRender) {
        elements.push(
          <p key={bill.bill_name}>
            <span className="text-center my-5 d-block fw-bold">{congress}</span>
            <a href={bill.bill_link} target="_blank" rel="noreferrer">
              {bill.bill_name}
            </a>{" "}
            - {bill.bill_desc}
          </p>
        );
      } else {
        elements.push(
          <p key={bill.bill_name}>
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
        <h3 className="mb-3">Sotto III, Vicente C.</h3>
        <h6 className="mb-5">Running for: Vice President</h6>
        <div className="intro">
          <img
            src="https://tribune.net.ph/wp-content/uploads/2019/09/tito-sotto2.jpg"
            alt="tito-sotto"
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
              Vicente "Tito" Castelo Sotto III (born August 24, 1948) is a
              Filipino politician and television presenter serving as the Senate
              President of the Philippines since 2018. Following the 2016
              elections, he is currently serving his fourth term in the Senate,
              having served two consecutive terms from 1992 to 2004; he was
              re-elected to the Senate in 2010. Prior to serving in the Senate,
              Sotto had served as the Vice Mayor of Quezon City from 1988 to
              1992.
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

export default TitoSotto;
