import React from "react";
import "./Pricing.css";
import Icon from "@mdi/react";
import { mdiCheckboxMarkedCircleOutline } from "@mdi/js";

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
      <div className="tables">
        <div className="pricing-one">
          <h2>Standard</h2>
          <h4>
            $99 <span>/Website</span>
          </h4>
          <ul>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" /> consectetur
              adipisicing elit
            </li>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
          </ul>
          <button>Buy now</button>
        </div>
        <div className="pricing-two">
          <h2>Standard</h2>
          <h4>
            $99 <span>/Website</span>
          </h4>
          <ul>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              {" "}
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
          <button>Buy now</button>
        </div>
        <div className="pricing-three">
          <h2>Standard</h2>
          <h4>
            $99 <span>/Website</span>
          </h4>
          <ul>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              {" "}
              <Icon path={mdiCheckboxMarkedCircleOutline} size={1} color="#ffff" />
              consectetur adipisicing elit
            </li>
            <li>
              {" "}
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
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
