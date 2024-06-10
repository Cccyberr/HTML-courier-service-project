import React, { useState } from 'react';

function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseOver = (card) => {
    setHoveredCard(card);
  };

  const handleMouseOut = () => {
    setHoveredCard(null);
  };

  return (
    <main className="container">
      <section id="services" className="row mb-5">
        <h2>Our Services</h2>
        <div className="col-md-6 mb-4">
          <div 
            className="card"
            onMouseOver={() => handleMouseOver('delivery')}
            onMouseOut={handleMouseOut}
          >
            <div className="card-body">
              <i className="fas fa-rocket fa-2x mr-3 text-primary"></i>
              <div>
                <h5 className="card-title">Express Delivery</h5>
                {hoveredCard === 'delivery' && (
                  <div className="additional-info">
                    <p>Express delivery ensures your package is delivered quickly and within a shorter timeframe compared to standard shipping methods.</p>
                    <p>With express delivery, you can expect expedited handling and faster transit times, making it ideal for urgent shipments.</p>
                    <p>Whether it's a time-sensitive document or a last-minute gift, express delivery provides a reliable and efficient shipping solution.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div 
            className="card"
            onMouseOver={() => handleMouseOver('tracking')}
            onMouseOut={handleMouseOut}
          >
            <div className="card-body">
              <i className="fas fa-map-marker-alt fa-2x mr-3 text-primary"></i>
              <div>
                <h5 className="card-title">Package Tracking</h5>
                {hoveredCard === 'tracking' && (
                  <div className="additional-info">
                    <p>Track your package in real-time and stay updated on its delivery status.</p>
                    <p>Package tracking allows you to monitor the progress of your shipment in real-time, providing valuable insights into its current location and estimated delivery time.</p>
                    <p>By utilizing tracking numbers or unique identifiers assigned to each package, you can access detailed information about its journey from origin to destination.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
