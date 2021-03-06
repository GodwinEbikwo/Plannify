import React from "react";

export default function CTA({ title, label }) {
  return (
    <section className="cta" data-scroll-section>
      <div className="container container--pall">
        <div className="inner-containers">
          <h1>{title}</h1>
          <a href="/" className="btn">
            {label}
          </a>
        </div>
      </div>
    </section>
  );
}
