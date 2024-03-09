import "./chunk-X6JV76XL.js";

// node_modules/creditcardpayments/creditCardPayments.js
function render(params) {
  paypal.Buttons(
    {
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: params.value
            }
          }]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          params.onApprove(details);
        });
      }
    }
  ).render(params.id);
}
export {
  render
};
//# sourceMappingURL=creditcardpayments_creditCardPayments.js.map
