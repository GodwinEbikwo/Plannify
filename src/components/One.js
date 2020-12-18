import React from "react";

export default function One() {
  return (
    <section
      className="one flex flex-ai-c flex-jc-c flex-fd-c"
      data-scroll-section
    >
      <div className="container container--pall">
        <div className="inner-containers">
          <h1>
            Plannify creates an easy way for travellers to travel and not worry
            about paying the full amount.
          </h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quis,
            suscipit delectus recusandae magni molestias!
          </h3>
        </div>
        <Grid />
      </div>
    </section>
  );
}

const Grid = () => {
  return (
    <div className="grid">
      <Card
        title="Flexible payment plan"
        content="
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, nam?"
      />
      <Card
        title="Visa consultation"
        content="
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, nam?"
      />
      <Card
        title="Medical issurance"
        content="
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, nam?"
      />
      <Card
        title="24/7 customer plan"
        content="
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, nam?"
      />
      <Card
        title="Travel card"
        content="
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, nam?"
      />
      <Card
        title="Airline tickets"
        content="
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, nam?"
      />
    </div>
  );
};

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <a href="/" className="link">
        Learn more →
      </a>
    </div>
  );
};
