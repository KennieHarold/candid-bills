import React, { Component } from "react";
import Wrapper from "./Wrapper";
import data from "../utils/data.json";

class LeniRobredo extends Component {
  renderBills = () => {
    let elements = [];
    let congress = "";
    let allowCongressRender = false;

    data["Robredo, Maria Leonor G."].forEach((bill) => {
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
        <h3 className="mb-3">Robredo, Maria Leonor G.</h3>
        <h6 className="mb-5">Running for: President</h6>
        <div className="intro">
          <img
            src="https://mb.com.ph/wp-content/uploads/2021/09/34017.jpeg"
            alt="leni-robredo"
            style={{
              borderRadius: 100,
              height: 125,
              width: 125,
              marginRight: 25,
              border: "2px solid #F1328D",
            }}
          />
          <div>
            <p>
              Maria Leonor "Leni" Gerona Robredo (born Maria Leonor Santo Tomas
              Gerona; April 23, 1965) is a Filipina lawyer, politician, and
              social activist who is the 14th and incumbent vice president of
              the Philippines. Robredo was the wife of the late Interior
              Secretary Jesse Robredo. She served as the representative of
              Camarines Sur's 3rd district from 2013 until her inauguration as
              vice president in 2016.
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

export default LeniRobredo;
