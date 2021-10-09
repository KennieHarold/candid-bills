import React, { Component } from "react";
import Wrapper from "./Wrapper";
import data from "../utils/data.json";

class KikoPangilinan extends Component {
  renderBills = () => {
    let elements = [];
    let congress = "";
    let allowCongressRender = false;

    data['Pangilinan, Francis "Kiko" N.'].forEach((bill) => {
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
        <h3 className="mb-3">Pangilinan, Francis "Kiko" N.</h3>
        <h6 className="mb-5">Running for: Vice President</h6>
        <div className="intro">
          <img
            src="https://media.philstar.com/photos/2019/05/10/kiko-pangilinan-pcoo_2019-05-10_16-12-46.jpg"
            alt="kiko-pangilinan"
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
              Francis Pancratius "Kiko" Nepomuceno Pangilinan (born August 24,
              1963) is a Filipino lawyer and politician who is currently serving
              as a Senator of the Philippines since 2016, having previously
              served from 2001 to 2013. Pangilinan's political career began as a
              student activist in 1985, on the eve of the People Power
              Revolution. In the Senate, he served as Senate Majority Leader
              from 2004 to 2008. In May 2014, Pangilinan was appointed
              Presidential Assistant for Food Security and Agricultural
              Modernization by President Benigno Aquino III. Pangilinan ran for
              senator again in 2016 under the Liberal Party, placing 9th out of
              12 winning candidates. He is currently the president of the party.
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

export default KikoPangilinan;
