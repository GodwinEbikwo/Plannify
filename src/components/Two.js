import React from "react";
import Image from "next/image";

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
            <div className="man hide-for-mobile"></div>
            <Image src="/man.png" width={2160} height={2160} alt="hands" />
          </div>
        </div>
      </div>
    </section>
  );
}

const QuestionOne = () => {
  return (
    <>
      <div className="one hide-for-mobile ">
        <div className="info-inner flex flex-ai-c flex-jc-c flex-fd-c">
          <h3>Search the place</h3>
        </div>
      </div>
    </>
  );
};

const QuestionTwo = () => {
  return (
    <>
      <div className="one two hide-for-mobile ">
        <div className="info-inner flex flex-ai-c flex-jc-c flex-fd-c">
          <h3>Look up possible dates</h3>
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
          <h3>Ensure you have a visa for that country</h3>
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
          <h3>Then decide</h3>
        </div>
      </div>
    </>
  );
};
