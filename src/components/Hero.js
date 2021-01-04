import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="hero flex flex-ai-c flex-jc-c flex-fd-c"
      data-scroll-section
    >
      <div className="container container--pall">
        <div className="hero__content">
          {/* <div className="card"></div>
          <div className="card two"></div> */}
          <h1>
            Plan your <span className="accent-line">dream</span> vacation pay
            later
          </h1>

          <h3>
            Travelling can't get any better at the moment if you ask me. It
            doesn’t need to be a headache, and by using Travel now, all your
            worries are gone instantly
          </h3>

          <div className="hero__btn-container">
            <a href="/" className="btn no-drag">
              Get started
            </a>
          </div>

          <div className="img-container">
            <Image src="/hands.png" width={1220} height={680} alt="hand" />
          </div>
        </div>
      </div>
    </section>
  );
}
