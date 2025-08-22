import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000, offset: 100 });
  }, []);
  const test = () => {
    const newCars = [
      'Tesla Model S',
      'Ford Mustang',
      'BMW M3',
      'Audi R8',
      'Lamborghini Huracan'
    ];
    setCars(newCars);
  };
  return (
    <div className="App">
      <Header test={test} cars={cars}/>
      <HeroSection />
      <CarSection />
      <SpecialOffer />
    </div>
  );
};

function Header({test,cars}) {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">CarZone</h1>
        <ul className="nav-links">
          <li onClick={test}><a href="#" className="nav-link">Home</a>
          </li>
          <li><a href="#" className="nav-link">Cars</a></li>
          <li><a href="#" className="nav-link">Specials</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
        {cars.length > 0 && (
        <div className="car-list">
          <h3>Available Cars:</h3>
          <ul>
            {cars.map((git, index) => (
              <li key={index}>{car}</li>
            ))}
          </ul>
        </div>
      )}
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content" data-aos="fade-up">
        <h2 className="hero-title">
          Welcome to <span>CarZone</span>
        </h2>
        <p className="hero-subtitle">
          Explore the finest cars, from sleek sports models to luxury rides.
        </p>
        <button className="cta-button">Explore Cars</button>
      </div>

      <div className="hero-image" data-aos="fade-left">
        <img src="/images/car.jpg" alt="Car showcase" className="hero-img" />
      </div>
    </section>
  );
}

function CarSection() {
  const cars = [
    'Tesla Model S',
    'Ford Mustang',
    'BMW M3',
    'Audi R8',
    'Lamborghini Huracan'
  ];

  return (
    <section id="cars" className="car-section">
      <h2 className="car-title" data-aos="fade-up">Our Cars</h2>
      <div className="car-items">
        {cars.map((car, index) => (
          <div
            key={index}
            className="car-item"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {car}
          </div>
        ))}
      </div>
    </section>
  );
}

function SpecialOffer() {
  return (
    <section id="special" className="special-section">
      <h2 className="special-title" data-aos="fade-up">Special Offer</h2>
      <div className="special-content">
 <img
       src="/images/car.jpg" 
       alt="Special Car Offer"
      className="special-img"
       data-aos="fade-right"
        />
        <div className="special-details" data-aos="fade-left">
          <h3>Limited Time Offer!</h3>
          <p>Get a free car accessory with any car purchase this weekend.</p>
          <button className="cta-button special-button">Explore Now</button>
        </div>
      </div>
    </section>
  );
}

export default App;
