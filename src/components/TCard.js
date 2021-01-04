import React from "react";
import Image from "next/image";

export default function TCard({ title, name, occupation }) {
  return (
    <div className="t__one">
      <div className="t__inner">
        <div className="t__title">
          <q>{title}</q>
        </div>
        <div className="t__author">
          <div className="imgDiv">
            <Image
              src="/seguun.png"
              width={200}
              height={200}
              className="services"
            />
          </div>
          <div className="author">
            <p id="t__name">{name}</p>
            <p id="t__occupation">{occupation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
