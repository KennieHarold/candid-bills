import React, { Component } from "react";
import Wrapper from "./Wrapper";
import data from "../utils/data.json";

class BatoDelaRosa extends Component {
  renderBills = () => {
    let elements = [];
    let congress = "";
    let allowCongressRender = false;

    data['Dela Rosa, Ronald "Bato"'].forEach((bill) => {
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
        <h3 className="mb-3">Dela Rosa, Ronald "Bato"</h3>
        <h6 className="mb-5">Running for: President</h6>
        <div className="intro">
          <img
            src="https://mb.com.ph/wp-content/uploads/2020/07/bato-1.jpg"
            alt="bato-delarosa"
            style={{
              borderRadius: 100,
              height: 125,
              width: 125,
              marginRight: 25,
              border: "2px solid #D20720",
            }}
          />
          <div>
            <p>
              Ronald Marapon dela Rosa (born January 21, 1962), also known as
              Bato, is a Filipino politician and retired police officer who is
              currently serving as a senator of the Philippines since 2019. He
              served as the chief of the Philippine National Police from July 1,
              2016 to April 19, 2018 and Director General of the Bureau of
              Corrections from April 30 to October 12, 2018.
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

export default BatoDelaRosa;
