import React from "react";
import Image from "next/image";

export default function Partnership() {
  return (
    <section className="Partnership" data-scroll-section>
      <div className="container container--pall">
        <div className="inner-containers">
          <h1>Our partners</h1>

          <div className="logo-container">
            <span>
              <Image src="/mc.svg" width={80} height={80} alt="master-card" />
            </span>
            <span>
              <Image
                src="/airbnb.svg"
                width={80}
                height={80}
                alt="master-card"
              />
            </span>
            <span>
              <Image
                src="/hilton.svg"
                width={80}
                height={80}
                alt="master-card"
              />
            </span>
            <span>
              <Image src="/ba.svg" width={80} height={80} alt="master-card" />{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
