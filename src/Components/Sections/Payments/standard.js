import React, { Component } from "react";
import "./payment.css";
import { PayPalButton } from "react-paypal-button-v2";

class Standard extends Component {
  render() {
    return (
      <div className="Payment">
        <div>
          <PayPalButton
            amount="199"
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
        </div>
      </div>
    );
  }
}
export default Standard;
