import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer" data-scroll-section>
      <div className="container container--pall">
        <div className="f_grid">
          <div className="block left">
            <div className="block-88">
              <a href="/" className="link">
                <Image
                  src="/plannify.svg"
                  width={141}
                  height={50}
                  alt="image"
                />
              </a>

              <div className="block-82">
                <a href="/" className="btn">
                  Apply now
                </a>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="block-85">
              <a href="" className="a-link">
                Services
              </a>
              <a href="" className="a-link">
                Contact
              </a>
              <a href="" className="a-link">
                About Us
              </a>
              <a href="" className="a-link">
                Privacy Policy
              </a>
            </div>

            <div className="block-84">
              <a href="/" className="b-link">
                PRESS & MEDIA KIT
              </a>
            </div>
          </div>
          <div className="block right">
            <div className="b-86">
              <a href="/">
                <Image
                  src="/plannify.svg"
                  width={141}
                  height={33}
                  alt="image"
                />
              </a>
            </div>

            <div className="b-87">
              <a href="/">LICENSE</a>
              <a href="/">SUPPORT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
