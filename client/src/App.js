import React, { useState, useEffect } from 'react';
import './App.css';

const services = [
  { name: 'Venue', price: 500000.00 },
  { name: 'Decorator', price: 200000.00 },
  { name: 'Catering', price: 300000.00 },
  { name: 'Photography/ videography', price: 250000.00 },
  { name: 'Music', price: 150000.00 },
  { name: 'Makeup/ Hairstylist', price: 100000.00 },
  { name: 'Emcee', price: 80000.00 },
];

const giftCodes = {
  'GIFT10': 0.1, // 10% discount
  'GIFT20': 0.2, // 20% discount
  // Add more gift codes as needed
};

function App() {
  const [cartServices, setCartServices] = useState([]);
  const [giftCode, setGiftCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    const total = cartServices.reduce((total, service) => total + service.price, 0);
    setTotalPrice(total);
    setDiscountedPrice(total * (1 - discount));
  }, [cartServices, discount]);

  const toggleService = (service) => {
    if (!cartServices.find(s => s.name === service.name)) {
      setCartServices([...cartServices, service]);
    } else {
      setCartServices(cartServices.filter(s => s.name !== service.name));
    }
  };

  const applyGiftCode = (event) => {
      event.preventDefault();
    if (giftCode in giftCodes) {
      setDiscount(giftCodes[giftCode]);
      console.log('Gift code applied');
    } else {
      console.log('Invalid gift code');
    }
  };

  const proceedToCheckout = () => {
    // Implement your checkout logic here
  };

  return (
    <div className="parent-container">
      <div className="cart-container">
        <h1>Our Services</h1>
        <div className="cart-items">
          {services.map((service, index) => (
            <div className="cart-item" key={index}>
              <span>{service.name}</span>
              <span>₹{service.price.toFixed(2)}</span>
              <div className="checkbox-wrapper-19">
              <input id={`cbtest-19${index}`} type="checkbox" onChange={() => toggleService(service)} />
              <label className="check-box" htmlFor={`cbtest-19${index}`}></label>
            </div>
            </div>
          ))}
           <div className="card coupons">
            <label className="title"></label>
            <form className="form">
              <input type="text" placeholder="Apply your coupons here" className="input_field" value={giftCode} onChange={e => setGiftCode(e.target.value)} />
              <button onClick={applyGiftCode}>Apply</button>
            </form>
          </div>
        </div>
      </div>

      <div className="summary-container">
        <div className="summary">
          <h2>Order Summary</h2>
          <p>Total price: ₹{totalPrice.toFixed(2)}</p>
          <p>Discount: {discount * 100}%</p>
          <p>Price after discount: ₹{discountedPrice.toFixed(2)}</p>
          <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        </div>
      
        <div className="customer-support">
          <h2>Customer Support</h2>
          <p>Contact us at:</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@creationsgoa.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;