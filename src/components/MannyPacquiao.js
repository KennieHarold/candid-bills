import React, { Component } from "react";
import Wrapper from "./Wrapper";
import data from "../utils/data.json";

class MannyPacquiao extends Component {
  renderBills = () => {
    let elements = [];
    let congress = "";
    let allowCongressRender = false;

    data['Pacquiao, Emmanuel "Manny" D.'].forEach((bill) => {
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
        <h3 className="mb-3">Pacquiao, Emmanuel "Manny" D.</h3>
        <h6 className="mb-5">Running for: President</h6>
        <div className="intro">
          <img
            src="https://i.daily.jp/ring/2020/03/29/Images/f_13231032.jpg"
            alt="manny-pacquiao"
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
              Emmanuel "Manny" Dapidran Pacquiao Sr., born December 17, 1978) is
              a Filipino politician and former professional boxer. Nicknamed
              "PacMan", he is regarded as one of the greatest professional
              boxers of all time. He has been serving as a senator of the
              Philippines since 2016, and as party president of the ruling party
              PDP–Laban since 2020 (disputed since 2021), and representative of
              Sarangani (2010–2016).
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

export default MannyPacquiao;
