export const QuestionOne = () => {
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

export const QuestionTwo = () => {
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
export const QuestionThree = () => {
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
export const QuestionFour = () => {
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

export const Features = ({ title }) => {
  return (
    <>
      <div className="featurecard four hide-for-desktop ">
        <div className="info-inner flex flex-ai-c flex-jc-c flex-fd-c">
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};

export const fdata = [
  {
    id: 1,
    title: "Search the location",
  },
  {
    id: 2,
    title: "Look up possible dates",
  },
  {
    id: 3,
    title: "Ensure you have a visa for that country",
  },
  {
    id: 4,
    title: "Then decide",
  },
];
