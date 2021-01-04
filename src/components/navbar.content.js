import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NC() {
  return (
    <section>
      <div className="dheader">
        <nav className="container container--pall flex flex-jc-sb flex-ai-c">
          <Link href="/">
            <a className="dheader__logo">
              <Image
                src="/plannify.svg"
                width={141}
                height={25}
                alt="titan-logo"
              />
            </a>
          </Link>

          <div className="dheader__links">
            <a href="#contact" className="button">
              Download App
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
}
