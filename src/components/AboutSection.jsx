import React, { useState } from "react"

const philosophySlides = [
  {
    id: 1,
    text: "Simple products are easier for everyone to use.",
  },
  {
    id: 2,
    text: "When the interface is clear, people don’t need instructions. They just understand it.",
  },
  {
    id: 3,
    text: "Less noise means more focus. Important actions stand out.",
  },
  {
    id: 4,
    text: "Design should guide the user, not get in their way.",
  },
  {
    id: 5,
    text: "My job isn’t to decorate. It’s to remove friction.",
  },
  {
    id: 6,
    text: "Simplicity isn’t emptiness. It’s clarity.",
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? philosophySlides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === philosophySlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">My design philosophy</span>
          <span className="heading-sec__sub">
            I design clear and simple interfaces that let users focus on <br />
            what they came to do. Nothing more, nothing less.
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <div className="about__content-details">
              <div
                className="philosophy-carousel"
                role="region"
                aria-roledescription="carousel"
                aria-label="Design philosophy statements"
              >
                <div className="philosophy-carousel__slide">
                  <p className="about__content-details-para">
                    {philosophySlides[activeIndex].text}
                  </p>
                </div>

                <div className="philosophy-carousel__controls">
                  <button
                    type="button"
                    className="philosophy-carousel__arrow philosophy-carousel__arrow--prev"
                    onClick={handlePrev}
                    aria-label="Previous philosophy statement"
                  >
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                  <button
                    type="button"
                    className="philosophy-carousel__arrow philosophy-carousel__arrow--next"
                    onClick={handleNext}
                    aria-label="Next philosophy statement"
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>

                <div className="philosophy-carousel__dots" aria-hidden="true">
                  {philosophySlides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      className={
                        "philosophy-carousel__dot" +
                        (index === activeIndex
                          ? " philosophy-carousel__dot--active"
                          : "")
                      }
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
