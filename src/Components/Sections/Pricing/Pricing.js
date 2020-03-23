import React from "react";
import "./Pricing.css";
import Icon from "@mdi/react";
import { mdiCheckboxMarkedCircleOutline } from "@mdi/js";
import { Link } from "react-router-dom";


const Pricing = () => {
  return (
    <div className="Pricing" id="pricing">
      <div className="title-container">
        <h2>Pricing</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia veniam
          asperiores.
        </p>
      </div>
      {/* <ScrollAnimation animateIn="wobble"> */}
      <div className="tables">
        <div className="pricing-one">
          <h2>Standard</h2>
          <span className="Amount-wrapper">
            <span className="currency">$</span>
            <span className="amount">199</span>
            <span className="perWebsite">/Site</span>
          </span>
          <ul>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" /> consectetur
              adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
          </ul>
          <Link to="/standard-payment" style={{ textDecoration: "none" }}>
            <button>Buy now</button>
          </Link>
        </div>
        <div className="pricing-two">
          <h2>Popular</h2>
          <span className="Amount-wrapper">
            <span className="currency">$</span>
            <span className="amount">299</span>
            <span className="perWebsite">/Site</span>
          </span>
          <ul>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
          </ul>
          <Link to="/popular-payment" style={{ textDecoration: "none" }}>
            <button>Buy now</button>
          </Link>
        </div>
        <div className="pricing-three">
          <h2>Premium</h2>
          <span className="Amount-wrapper">
            <span className="currency">$</span>
            <span className="amount">499</span>
            <span className="perWebsite">/Site</span>
          </span>
          <ul>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
          </ul>
          <Link to="/premium-payment" style={{ textDecoration: "none" }}>
            <button>Buy now</button>
          </Link>
        </div>
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
};
export default Pricing;
