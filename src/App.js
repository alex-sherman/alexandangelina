import "./App.css";
import "./scroll.css";
import us from "./images/us2.jpg";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";

function Section({ children, container }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    container: container,
    offset: [".5 end", ".500001 end"],
  });
  const [hookedYPostion, setHookedYPosition] = React.useState(scrollYProgress.get());
  scrollYProgress.onChange((v) => setHookedYPosition(v));
  return (
    <section ref={ref}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { scrollYProgress: hookedYPostion })
      )}
    </section>
  );
}

function App() {
  return (
    <>
    <script type="text/javascript" src="https://alexandangelina.rsvpify.com/embed"></script>
      <div className="page">
        <svg className="bg" preserveAspectRatio="xMinYMin slice" id="visual" viewBox="0 0 960 540">
          <rect x="0" y="0" width="960" height="540" fill="#FCEAE2"></rect>
          <path
            d="M0 137L26.7 142C53.3 147 106.7 157 160 150.5C213.3 144 266.7 121 320 113.7C373.3 106.3 426.7 114.7 480 123.2C533.3 131.7 586.7 140.3 640 136.7C693.3 133 746.7 117 800 117.7C853.3 118.3 906.7 135.7 933.3 144.3L960 153L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
            fill="#FFB627"
          ></path>
          <path
            d="M0 300L26.7 290.3C53.3 280.7 106.7 261.3 160 260C213.3 258.7 266.7 275.3 320 274.3C373.3 273.3 426.7 254.7 480 252.2C533.3 249.7 586.7 263.3 640 264.8C693.3 266.3 746.7 255.7 800 256C853.3 256.3 906.7 267.7 933.3 273.3L960 279L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
            fill="#4875C0"
          ></path>
          <path
            d="M0 388L26.7 388C53.3 388 106.7 388 160 384.3C213.3 380.7 266.7 373.3 320 372C373.3 370.7 426.7 375.3 480 387.8C533.3 400.3 586.7 420.7 640 428.7C693.3 436.7 746.7 432.3 800 429C853.3 425.7 906.7 423.3 933.3 422.2L960 421L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
            fill="#335D53"
          ></path>
        </svg>
      </div>
      <div className="scroll-snap">
        <Section>
          <img src={us} alt="Logo"/>
          <h1>Alex & Angelina</h1>
          <h2>AUGUST 23 | MADISON</h2>
          <a href="https://alexandangelina.rsvpify.com">RSVP</a>
        </Section>
      </div>
    </>
  );
}

export default App;
