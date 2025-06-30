import "./App.css";
import "./scroll.css";
import us from "./images/us2.jpg";
import scrollDown from "./images/down_arrow.svg";
import { useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Section({ children, ...props }) {
  return (
    <section {...props}>
      {React.Children.map(children, (child) => React.cloneElement(child))}
    </section>
  );
}

function Info({ children, title }) {
  return (
    <>
      <div>
        <b>{title + ":"}&nbsp;</b>
      </div>
      <div className="info">{React.Children.map(children, (child) => child)}</div>
    </>
  );
}
let clicks = 0;
let timeout = 0;

function ANT({ children, href }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {React.Children.map(children, (child) => child)}
    </a>
  );
}

function Registry() {
  return (
    <div className="card-container">
      <div className="card small">
        <p style={{ textDecoration: "underline" }}>
          <i>
            We don't want anybody to feel obliged to get us wedding gifts. For gift-givers who want
            ideas for things we will certainly love, we made this secret registry to help out.
          </i>
        </p>
        <div className="info-table">
          <Info title="Plants">
            Any trees, bushes, or flowers from{" "}
            <ANT href="https://www.mckaynursery.com/?srsltid=AfmBOopgUH2S4Pwjv1J6ZvzFOiNsvBAmCEe2FRj0Tw0z6Mtf45J9BHbV">
              McKay Nursery
            </ANT>{" "}
            to fill up our yard.
          </Info>
          <Info title="Experiences">
            We would love any gifts that will let us try something new as a couple. Feel free to
            surprise us! Here are a few ideas:
            <ul>
              <li>
                <ANT href="https://salsamadison.net/register/p/gift">Salsa/bachata lessons</ANT>
              </li>
              <li>
                <ANT href="https://www.surlatable.com/cooking-classes/">
                  Cooking classes at Sur La Table
                </ANT>
              </li>
              <li>
                <ANT href="https://www.overture.org/tickets-events/gift-certificates">
                  Credits for events at Overture Center
                </ANT>
              </li>
            </ul>
          </Info>
          <Info title="Outdoors">
            Anything (really anything) <ANT href="https://www.rei.com/">from REI.</ANT>
          </Info>
        </div>

        <p style={{ textDecoration: "underline" }}>
          <i>If you would like to give us money as a gift…</i>
        </p>
        <p>
          <b>Tell us to put it towards improvements on our house:</b> and also send us a copy of one
          of your favorite recipes. The best way we can improve our home is with more great food!
          We'll save what you send us into a wedding recipe book.
        </p>
        <p>
          <b>Tell us to put it towards our honeymoon:</b> and send us an idea for a place to add to
          our travel bucket list. (Angelina takes her bucket lists seriously!)
        </p>
        <p>
          <b>
            Instead of giving us a gift, we would love for people to donate to the UW Madison
            Arboretum:
          </b>{" "}
          the Arboretum is a large nature preserve in downtown Madison and a space where we spend
          many hours walking, kayaking, cross country skiing, and riding bikes. Having such a
          beautiful wilderness area in the middle of a city adds an incredible amount to our
          everyday lives. The Arboretum is supported primarily by donations from the community. Just
          let us know that you did this, and go enjoy a beautiful walk out there!{" "}
          <ANT href="https://arboretum.wisc.edu/get-involved/donate/">Donate here.</ANT>
        </p>
      </div>
    </div>
  );
}

function App() {
  const [showScroll, setShowScroll] = useState(true);
  const [reversed, setReversed] = useState(false);
  const ref = useRef(null);
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    container: ref,
  });

  const onceRef = useRef(null);
  useEffect(() => {
    if (onceRef.current) return;
    onceRef.current = true;
    if (window.location.pathname === "/registry") {
      setTimeout(() => setReversed(true), 1000);
    }
  });

  let flip = (event) => {
    clicks += 1;
    if (clicks == 2) {
      setReversed(!reversed);
      clicks = 0;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      clicks = 0;
    }, 200);
  };
  scrollYProgress.on("change", () => setShowScroll(false));
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
      {showScroll && (
        <img
          src={scrollDown}
          className="scroll-down"
          onClick={() => scrollTarget.current.scrollIntoView({ behavior: "smooth" })}
        />
      )}
      <div className="scroll-snap" ref={ref}>
        <Section>
          <div className={"flip" + (reversed ? " reverse" : "")} onClick={flip}>
            <div className="flip-inner">
              <div className="front">
                <img src={us} alt="Logo" className="us" />
                <h1>Alex & Angelina</h1>
                <h2>AUGUST 23 | MADISON</h2>
                <a className="rsvp" href="https://alexandangelina.rsvpify.com">
                  RSVP
                </a>
              </div>
              <div className="back">
                <Registry />
              </div>
            </div>
          </div>
        </Section>
        <Section ref={scrollTarget}>
          <div className="card-container">
            <div className="card">
              <div className="info-table">
                <Info title="What">
                  A reception party to celebrate our wedding. We will be getting married in a
                  private ceremony with immediate family the week before.
                </Info>
                <Info title="When">August 23, 2025</Info>
                <Info title="Where">
                  <div>
                    Alex and Angelina's house
                    <br />
                    1014 Emerald Street
                    <br />
                    Madison, WI 53715
                  </div>
                </Info>
                <Info title="Attire">
                  Anything from comfortable dress clothes and summer dresses to suits and gowns.
                </Info>
                <Info title="Schedule">
                  <b>Event week (August 18-22)</b>
                  <ul>
                    <li>
                      Come to Madison any time! We will be using this week to spend quality time
                      with friends & family. Some fun activities TBD.
                    </li>
                  </ul>
                  <b>Reception (August 23)</b>
                  <ul>
                    <li>4:00 - Cocktail hour</li>
                    <li>5:00 - Dinner</li>
                    <li>6:30 - Cake, speeches</li>
                    <li>7:00 - Party and dance!</li>
                    <li>10:00 - After party</li>
                  </ul>
                  <b>Morning after (August 24)</b>
                  <ul>
                    <li>Brunch, details TBD.</li>
                  </ul>
                </Info>
                <Info title="Setting">
                  The party will be in our yard with a tent. In the case of bad weather we will pile
                  into the house.
                </Info>
                <Info title="Playlist">
                  Help us make our playlists!&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/spreadsheets/d/1Yw6_OIBe5otdBnDgdhCNiSXdpSDnouoQyU8bfwSuKxM/edit?usp=sharing"
                  >
                    Add your songs here.
                  </a>
                </Info>
                <Info title="Photos">
                  Help us make our photo album! Add some of your favorite memories with us (we're
                  thinking of using these for a collage).&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://photos.app.goo.gl/ptkk3p8nCT3mFGfR9"
                  >
                    Add your photos here.
                  </a>
                </Info>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default App;
