import React from "react";
import Image from "next/image";
import { Feature, Fdata } from "../data/index";

const Third = () => {
  return (
    <section
      className="Three flex flex-ai-c flex-jc-c flex-fd-c"
      data-scroll-section
    >
      <div className="container container--pall">
        <div className="inner-containers">
          <h1>
            Apply for <span className="accent-line">plannify's</span> credit
          </h1>
          <h3>
            The enitre process only takes minutes and won't affect your credit
            score. You will recieve a confirmation regarding if you have
            qualified for the program.
          </h3>

          <div className="imgthree--container">
            <div className="card hide-for-mobile"></div>
            <QuestionOne />
            <QuestionFour />
            <Image
              src="/girl.png"
              width={2160}
              height={2160}
              alt="sally-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;

const QuestionOne = () => {
  return (
    <>
      <div className="one hide-for-mobile ">
        <div className="info-inner flex flex-ai-c flex-jc-c flex-fd-c">
          <h3>Fill in the required information and send it.</h3>
        </div>
      </div>
    </>
  );
};

const QuestionFour = () => {
  return (
    <>
      <div className="one four hide-for-mobile ">
        <div className="info-inner flex flex-ai-c flex-jc-c flex-fd-c">
          <h3>Relax and wait for your information to be verified in minutes</h3>
        </div>
      </div>
    </>
  );
};
