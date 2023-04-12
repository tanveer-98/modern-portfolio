import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { styles } from "../styles";

import {
  Billing,
  Clients,
  Business,
  Button,
  Hero,
  CardDeal,
  CTA,
  Navbar,
  Stats,
  Testimonials,
  FeedbackCard,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="paddingX flexCenter ">
        <div className="boxWidth flexCenter">
          <Navbar />
        </div>
      </div>
      <div className="bg-primary flexStart">
        <div className="boxWidth">
          <Hero />
        </div>
      </div>
      <div className="bg-primary paddingX flexStart">
        <div className="boxWidth">
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
