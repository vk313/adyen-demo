var paymentSession = {
      paymentSession: "insert your payment session string here"
}

  
    var sdkConfigObj = {
       context : 'test' // change this to 'live' when you go live.
    }
    // Initiate the Checkout form.
    var checkout = chckt.checkout(paymentSession, '#payment-form', sdkConfigObj);

    chckt.hooks.beforeComplete = function(node, paymentData) {
      // 'node' is a reference to the Checkout container HTML node.
      // 'paymentData' is the result of the payment, and contains the 'payload'.
      console.log(node)
      console.log(paymentData)
      return true; // Indicates that you want to replace the default handling.
 };
 