import React from "react";
import "./payment.css";
import { PayPalButton } from "react-paypal-button-v2";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div className="Payment">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Icon className="payment-close" path={mdiClose} size={1.1} color="#ffff" />
      </Link>
      <section>
        <PayPalButton
          amount="1"
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            // OPTIONAL: Call your server to save the transaction
            return fetch("/paypal-transaction-complete", {
              method: "post",
              body: JSON.stringify({
                orderID: data.orderID
              })
            });
          }}
        />
      </section>
    </div>
  );
};
export default Popular;
