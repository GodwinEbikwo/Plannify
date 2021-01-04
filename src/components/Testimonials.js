import React from "react";
import TCard from "./TCard";
import { Tcontent } from "../data/index";

export default function Testimonials() {
  return (
    <section data-scroll-section className="testimonials">
      <div className="container container--pall">
        <div className="inner-containers">
          <h1>
            See what our <span className="accent-line"> customers</span> have
            been saying about us
          </h1>
        </div>
        <div className="t__grid">
          {Tcontent.map((data, _) => (
            <TCard
              key={data.id}
              title={data.title}
              name={data.name}
              occupation={data.occupation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
