import React from "react";
import Image from "next/image";
import { Features, fourdata } from "../data/index";

export default function Four() {
  return (
    <section
      className="Four flex flex-ai-c flex-jc-c flex-fd-c"
      data-scroll-section
    >
      <div className="container container--pall">
        <div className="inner-containers">
          <h1>
            Pack your <span className="accent-line">bags</span>
          </h1>
          <h3>
            After you have been accepted into the program, pack your bags and
            get ready to fly, it's that quick and simple.
          </h3>

          <div className="imgfour--container">
            <div className="card hide-for-mobile"></div>

            {fourdata.map((data, _) => (
              <Features key={data.id} title={data.title} />
            ))}

            <Image src="/fly.png" width={2160} height={2160} alt="hands" />
          </div>
        </div>
      </div>
    </section>
  );
}
