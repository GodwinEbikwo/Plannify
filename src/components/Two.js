import React from "react";
import Image from "next/image";
import {
  QuestionOne,
  QuestionTwo,
  QuestionThree,
  QuestionFour,
  Features,
  twodata,
} from "../data/index";

export default function Two() {
  return (
    <section
      className="Two flex flex-ai-c flex-jc-c flex-fd-c"
      data-scroll-section
    >
      <div className="container container--pall">
        <div className="inner-containers">
          <h1>
            First thing first, you have to{" "}
            <span className="pink-line">decide</span> the location where you
            want to go to.
          </h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quas,
            sequi dolor ad voluptatem doloremque?
          </h3>

          <div className="imgtwo--container">
            <div className="card hide-for-mobile"></div>
            <QuestionOne />
            <QuestionTwo />
            <QuestionThree />
            <QuestionFour />
            {twodata.map((data, _) => (
              <Features key={data.id} title={data.title} />
            ))}
            <div className="imgself">
              <Image
                src="/man.png"
                width={2160}
                height={2160}
                alt="hands"
                className="imgself"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
