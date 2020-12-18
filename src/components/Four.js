import React from "react";
import Image from "next/image";

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

            <QuestionTwo />
            <QuestionThree />

            <Image src="/fly.png" width={2160} height={2160} alt="hands" />
          </div>
        </div>
      </div>
    </section>
  );
}

const QuestionTwo = () => {
  return (
    <>
      <div className="one two hide-for-mobile ">
        <div className="info-inner flex flex-ai-c flex-jc-c flex-fd-c">
          <h3>Tell you cat bye and hello Greece!</h3>
        </div>
      </div>
    </>
  );
};
const QuestionThree = () => {
  return (
    <>
      <div className="one three hide-for-mobile ">
        <div className="info-inner flex flex-ai-c flex-jc-c flex-fd-c">
          <h3>Cross check and make sure you have all the required documents</h3>
        </div>
      </div>
    </>
  );
};
