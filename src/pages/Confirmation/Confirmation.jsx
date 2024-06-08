import React from "react";
import Footer from "../../components/Footer/Footer";
import Delivery from "../../components/Delivery/Delivery";
import Orders from "../../components/Orders/Orders";

const Confirmation = () => {
  return (
    <div>
      <h1>Thank you for your order!</h1>
      <Orders
        showCheckoutButton={false}
        showRemoveButton={false}
        showFoodPrice={false}
      />
      <Delivery />
      <Footer />
    </div>
  );
};

export default Confirmation;
