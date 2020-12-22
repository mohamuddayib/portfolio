import React from "react";
import "./Pricing.css";
import Icon from "@mdi/react";
import { mdiCheckboxMarkedCircleOutline } from "@mdi/js";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="Pricing" id="Pricing">
      <div className="title-container">
        <h2>Pricing</h2>
        <p>
          Choose a plan that's right for your business
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
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              1 year free domain and hosting
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              Maximum five webpages.
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              Search Engnine optimisation
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              maximum two admin users
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              Devlivery time one week
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              Support 24/7
            </li>
          </ul>
          <Link to="/standard-payment" style={{ textDecoration: "none" }}>
            <button>Order now</button>
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
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              All features in standard plan
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              Google anyltics integration
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              Live chat app integration
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              Unlimited admin users
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              Maximum 10 webpages
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              10 email accounts
            </li>
          </ul>
          <Link to="/popular-payment" style={{ textDecoration: "none" }}>
            <button>Order now</button>
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
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              All features in popular plan
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              E-commerce solution
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              CRM software
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              Unlimited email accounts
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              Multi language support
            </li>
            <li>
              <Icon
                path={mdiCheckboxMarkedCircleOutline}
                size={1}
                color="#ffff"
              />
              Payment gatway integration
            </li>
          </ul>
          <Link to="/premium-payment" style={{ textDecoration: "none" }}>
            <button>Order now</button>
          </Link>
        </div>
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
};
export default Pricing;
