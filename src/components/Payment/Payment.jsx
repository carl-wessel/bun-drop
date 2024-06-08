import React, { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

import "./Payment.css";

const Payment = () => {
  const { getCart, calculateFoodPrice } = useLocalStorage();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
    calculateFoodPrice();
  }, []);

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10}$/;
    return re.test(phoneNumber);
  };

  const validate = () => {
    const newErrors = {};

    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email || !validateEmail(email))
      newErrors.email = "Valid email is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";

    if (paymentMethod === "card") {
      if (!cardNumber || !/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber))
        newErrors.cardNumber = "Valid card number is required.";
      if (!expDate || !/^\d{2}\/\d{2}$/.test(expDate))
        newErrors.expDate = "Valid expiration date is required";
      if (!cvc || cvc.length !== 3) newErrors.cvc = "Valid CVC is required";
    } else {
      if (!phoneNumber || !validatePhoneNumber(phoneNumber))
        newErrors.phoneNumber = "Valid phone number is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully");
      navigate("/confirmation");
    }
  };

  return (
    <>
      <h1>Checkout</h1>
      <form className="checkout-wrapper" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <div className="inputs">
            <p>First name:</p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <p>Last name:</p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}

            <p>Email:</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <p>Address:</p>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <p className="error">{errors.address}</p>}

            <p>City:</p>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>
        </div>
        <div className="payment-method">
          <p>Payment Method:</p>
          <label>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Card
          </label>
          <label>
            <input
              type="radio"
              value="swish"
              checked={paymentMethod === "swish"}
              onChange={() => setPaymentMethod("swish")}
            />
            Swish
          </label>
        </div>
        {paymentMethod === "card" && (
          <div className="bank-card">
            <p>Card Number:</p>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}

            <p>Exp date (MM/YY):</p>
            <input
              type="text"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
            />
            {errors.expDate && <p className="error">{errors.expDate}</p>}

            <p>CVC:</p>
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
            {errors.cvc && <p className="error">{errors.cvc}</p>}
          </div>
        )}
        {paymentMethod === "swish" && (
          <div className="swish">
            <p>Phone Number:</p>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>
        )}
        <div className="total-amount">
          <p>Food: {parseFloat(calculateFoodPrice()).toFixed(2)} $</p>
          <p>Delivery Fee: 7 $</p>
          <p>Service Fee: 2 $</p>
          <h3>Total Price: {parseFloat(calculateFoodPrice()) + 2 + 7} $</h3>
        </div>

        <button type="submit">Checkout</button>
      </form>
    </>
  );
};

export default Payment;
