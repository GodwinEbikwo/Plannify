import React from "react";
import Image from "next/image";

export default function Three() {
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
            {/* <QuestionTwo /> */}
            {/* <QuestionThree /> */}
            <QuestionFour />
            <Image src="/girl.png" width={2160} height={2160} alt="hands" />
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
          <h3>Fill in the required information and send it.</h3>
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
          <h3>Relax and wait for your information to be verified in minutes</h3>
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
          <h3>Relax and wait for your information to be verified in minutes</h3>
        </div>
      </div>
    </>
  );
};
