import React, { useEffect } from "react";
import "./letters.css";

function Letters() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".overlay");
    for (let i = 0; i < nodes.length; i++) {
      const words = nodes[i].innerText;
      let html = "";
      for (let i2 = 0; i2 < words.length; i2++) {
        if (words[i2] === " ") html += words[i2];
        else html += "<span>" + words[i2] + "</span>";
      }
      nodes[i].innerHTML = html;
    }
  }, []);

  return (
    <main className="main">
      <h2 className="overlay">
        My love for art inspired me to become a frontend developer. It is
        magical to have an idea coming into fruition.
      </h2>
      <video autoPlay muted loop className="video">
        <source
          src="http://techslides.com/demos/sample-videos/small.webm"
          type="video/webm"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.mp4"
          type="video/mp4"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.ogv"
          type="video/ogg"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.3gp"
          type="video/3gp"
        />
      </video>
    </main>
  );
}

export default Letters;
