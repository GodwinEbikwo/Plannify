import React from "react";

export default function CTA({ title }) {
  return (
    <section className="cta" data-scroll-section>
      <div className="container container--pall">
        <div className="inner-containers">
          <h1>{title}</h1>
          <a href="/" className="btn">
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
