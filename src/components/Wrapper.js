import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const candidateTabs = [
  {
    title: 'Pacquiao, Emmanuel "Manny" D.',
    eventKey: "/manny-pacquiao",
  },
  {
    title: "Lacson, Panfilo M.",
    eventKey: "/ping-lacson",
  },
  {
    title: 'Marcos, Ferdinand "Bongbong" R.',
    eventKey: "/bongbong-marcos",
  },
  {
    title: "Robredo, Maria Leonor G.",
    eventKey: "/leni-robredo",
  },
  {
    title: 'Dela Rosa, Ronald "Bato"',
    eventKey: "/bato-delarosa",
  },
  {
    title: "Sotto III, Vicente C.",
    eventKey: "/tito-sotto",
  },
  {
    title: "Go, Christopher Lawrence T.",
    eventKey: "/bong-go",
  },
  {
    title: 'Pangilinan, Francis "Kiko" N.',
    eventKey: "/kiko-pangilinan",
  },
];

class Wrapper extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="text-center mb-5">
          <h2 className="mb-3">Candid Bills</h2>
          <h5>(13th-18th Congress)</h5>
        </div>
        <Tabs
          defaultActiveKey="/manny-pacquiao"
          activeKey={this.props.location}
          onSelect={(route) => {
            window.location.href = route;
          }}
          id="uncontrolled-tab-example"
        >
          {candidateTabs.map((tab) => (
            <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.title}>
              <div className="custom-wrapper">{this.props.children}</div>
            </Tab>
          ))}
        </Tabs>
        <div className="p-3">
          <p className="fw-bold">Sources:</p>
          <a
            className="d-block"
            href="http://legacy.senate.gov.ph/"
            target="_blank"
            rel="noreferrer"
          >
            legacy.senate.gov.ph/
          </a>
          <a
            className="d-block"
            href="https://www.congress.gov.ph/"
            target="_blank"
            rel="noreferrer"
          >
            www.congress.gov.ph/
          </a>
        </div>
      </div>
    );
  }
}

export default Wrapper;
