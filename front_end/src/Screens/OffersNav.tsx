import React, { useState, useEffect } from "react";
import "./OffersNav.css";

function OffersNav() {
  const messages = [
    "Despacho gratis solo en Santiago",
    "Todo producto infantil con 30% de descuento",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="offers-navbar">
      <div className="news-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`news-item ${index === currentMessageIndex ? "active" : ""}`}
          >
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OffersNav;
