import React, { Component } from "react";
import Wrapper from "./Wrapper";
import data from "../utils/data.json";

class BongBongMarcos extends Component {
  renderBills = () => {
    let elements = [];
    let congress = "";
    let allowCongressRender = false;

    data['Marcos, Ferdinand "Bongbong" R.'].forEach((bill) => {
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
        <h3 className="mb-3">Marcos, Ferdinand "Bongbong" R.</h3>
        <h6 className="mb-5">Running for: President</h6>
        <div className="intro">
          <img
            src="https://newsinfo.inquirer.net/files/2021/02/News124936.jpg"
            alt="bongbong-marcos"
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
              Ferdinand "Bongbong" Romualdez Marcos Jr. (born September 13,
              1957), also known by his initials BBM, is a Filipino politician
              who most recently served as a senator from 2010 to 2016. He is the
              second child and only son of former president, dictator and
              kleptocrat Ferdinand Marcos and former First Lady Imelda Romualdez
              Marcos.
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

export default BongBongMarcos;
