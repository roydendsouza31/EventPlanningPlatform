import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar/navbar";
import "./landingpage.css";

const Landingpage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Add currentIndex state

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api//gettestimonials"
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 3;
      return newIndex < 0 ? testimonials.length - 3 : newIndex;
    });
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 3;
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };

  return (
    <div className="landingpage">
      <Navbar />
      <div>
        <h1 className="titlelandingpage">
          Crafting <span>Unforgettable</span>
          <br />
          Moments
        </h1>
      </div>

      <div>
        <h2>What We Provide</h2>
        <div className="container">
          <div className="row">
            <div className="service-box col-md-4 mx-5">Venue Selection</div>
            <div className="service-box col-md-4 mx-5">Decor & Design</div>
            <div className="service-box col-md-4 mx-5">Beautician</div>
          </div>
          <div className="row">
            <div className="service-box col-md-4 mx-5">Music</div>
            <div className="service-box col-md-4 mx-5">Catering</div>
            <div className="service-box col-md-4 mx-5">Photographer</div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-carousel">
          <button
            className="testimonialbtn btn btn-primary me-2"
            onClick={prevTestimonial}
          >
            Prev
          </button>
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .map((testimonial) => (
              <div key={testimonial._id} className="testimonial-card">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-content">{testimonial.testimonial}</p>
              </div>
            ))}
          <button
            className="testimonialbtn btn btn-primary"
            onClick={nextTestimonial}
          >
            Next
          </button>
        </div>
      </div>

      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">© 2021 Creations-Goa, Inc</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32"></svg>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="/" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/about" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Landingpage;
