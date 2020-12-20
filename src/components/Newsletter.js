import React, { useRef, useState } from "react";

export default function Newsletter() {
  const inputEl = useRef(null);

  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);

      return;
    }

    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <section
      data-scroll-section
      className="newsletter flex flex-ai-c flex-jc-c"
    >
      <div className="container container--pall">
        <div className="inner-containers">
          <h1>Subscribe to our newsletters</h1>
          <h3>
            Get emails from us about travelling, lifestyle, and early access to
            new articles and discounts we provide. Don't miss out!
          </h3>
          <div className="input-container">
            <form onSubmit={subscribe}>
              <label htmlFor="email-input">{"Email Address"}</label>
              <input
                aria-label="Email for newsletter"
                id="email-input"
                name="email"
                placeholder="you@awesome.com"
                ref={inputEl}
                type="email"
                className="input"
              />
              <div>
                {message
                  ? message
                  : `we only send emails when new content is posted. No spam.`}
              </div>
              <button type="submit" className="flex flex-ai-c flex-jc-c button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
