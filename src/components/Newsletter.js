import React from "react";

export default function Newsletter() {
  return (
    <section
      data-scroll-section
      className="newsletter flex flex-ai-c flex-jc-c"
    >
      <div className="container container--pall">
        <div className="inner-containers">
          <h1>Subscribe to our newsletters</h1>
          <h3>
            Get emails from us about travelling, lifestyle, and early access to
            new articles and discounts we provide. Don't miss out!
          </h3>
          <div className="input-container">
            <input
              type="email"
              aria-label="Email for newsletter"
              placeholder="letmetravel@plannify.com"
              autoComplete="email"
              required
              className="input"
            />
            <button className="flex flex-ai-c flex-jc-c button">
              Subscribe
            </button>
          </div>
        </div>
        {/* <Subscribe /> */}
      </div>
    </section>
  );
}
