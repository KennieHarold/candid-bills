import React, { Component } from "react";
import Wrapper from "./Wrapper";
import data from "../utils/data.json";

class BongGo extends Component {
  renderBills = () => {
    let elements = [];
    let congress = "";
    let allowCongressRender = false;

    data["Go, Christopher Lawrence T."].forEach((bill) => {
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
        <h3 className="mb-3">Go, Christopher Lawrence T.</h3>
        <h6 className="mb-5">Running for: Vice President</h6>
        <div className="intro">
          <img
            src="https://www.manilatimes.net/manilatimes/uploads/images/2021/07/07/6884.jpg"
            alt="bong-go"
            style={{
              borderRadius: 100,
              height: 125,
              width: 125,
              marginRight: 25,
              border: "2px solid red",
            }}
          />
          <div>
            <p>
              Christopher Lawrence "Bong" Tesoro Go (born June 14, 1974) is a
              Filipino politician serving as a Senator since 2019. He previously
              served in President Rodrigo Duterte's Cabinet as Special Assistant
              to the President and Head of the Presidential Management Staff
              from June 2016 to October 2018. Go has served as the personal aide
              and special assistant to Duterte since 1998, back when Duterte was
              still mayor of Davao City.
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

export default BongGo;
