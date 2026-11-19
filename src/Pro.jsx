import React, { useState } from "react";

import {
  FiPlay,
  FiChevronLeft,
  FiChevronRight,
  FiArrowUp,
} from "react-icons/fi";

import "./Pro.css";

import videoImage from "./video-image.png";
import author1 from "./testimonials-author-1.png";
import author2 from "./testimonials-author-2.png";

import image1 from "./image-1.jpg";
import image2 from "./image-2.jpg";
import image3 from "./image-3.png";
import image4 from "./image-4.png";
import image5 from "./image-5.jpg";
import image6 from "./image-6.jpg";

const testimonials = [
  {
    image: author1,
    quote:
      "A balanced diet is having piece of cake in one, and coffee in another hand. I am pretty sure that chocolate tastes as good as skinny.",
    name: "Charlotte Evans",
    role: "designer",
  },
  {
    image: author2,
    quote:
      "Life is better with a little coffee and a lot of cake. Every visit here feels like a beautiful little moment.",
    name: "Olivia Martin",
    role: "customer",
  },
];

function Pro() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const nextTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[currentTestimonial];

  const galleryImages = [
    { image: image1, title: "Our Coffee", className: "gallery-item-1" },
    { image: image2, title: "Sweet Moments", className: "gallery-item-2" },
    { image: image3, title: "Sweet Moments", className: "gallery-item-3" },
    { image: image4, title: "Fresh Cakes", className: "gallery-item-4" },
    { image: image5, title: "Perfect Espresso", className: "gallery-item-5" },
    { image: image6, title: "Made With Love", className: "gallery-item-6" },
  ];

  return (
    <section className="cafe-pro">

      <section className="cafe-video-section">

        <img
          src={videoImage}
          alt="Friends enjoying coffee and cake"
          className="cafe-video-background"
        />

        <div className="cafe-video-overlay"></div>

        <button
          className={`cafe-video-play ${
            videoPlaying ? "playing" : ""
          }`}
          onClick={() => setVideoPlaying(!videoPlaying)}
          aria-label="Play video"
        >
          {videoPlaying ? "Ⅱ" : <FiPlay />}
        </button>

        {videoPlaying && (
          <div className="cafe-video-message">
            <p>Welcome to Café de Flore</p>

            <button
              onClick={() => setVideoPlaying(false)}
              className="cafe-video-close"
            >
              Close
            </button>
          </div>
        )}

      </section>
      <section
        className="cafe-testimonial-section"
        id="testimonials"
      >

        <h2 className="cafe-testimonial-heading">
          Vos mots
        </h2>

        <div className="cafe-testimonial-container">

          <button
            className="cafe-testimonial-arrow left"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <FiChevronLeft />
          </button>

          <div
            className="cafe-testimonial-content"
            key={currentTestimonial}
          >

            <div className="cafe-author-image">
              <img
                src={testimonial.image}
                alt={testimonial.name}
              />
            </div>

            <p className="cafe-testimonial-quote">
              {testimonial.quote}
            </p>

            <div className="cafe-testimonial-author">
              <h3>{testimonial.name}</h3>
              <span>{testimonial.role}</span>
            </div>

          </div>

          <button
            className="cafe-testimonial-arrow right"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <FiChevronRight />
          </button>

        </div>

      </section>
    
      <section className="cafe-gallery-section" id="gallery">

        <div className="cafe-gallery-grid">

          {galleryImages.map((item, index) => (
            <div
              className={`cafe-gallery-item ${item.className}`}
              key={index}
            >
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="cafe-gallery-overlay">
                <span>{item.title}</span>
              </div>

            </div>
          ))}

        </div>

      </section>


      <a
        href="/"
        className="cafe-back-to-top"
        aria-label="Back to top"
      >
        <FiArrowUp />
      </a>

    </section>
  );
}

export default Pro;