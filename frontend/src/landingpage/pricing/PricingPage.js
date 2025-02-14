import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import Equity from "./Equity";
import AoCharges from "./AoCharges";
import OvCharges from "./OvCharges";

function PricingPage() {
  return (
    <>
      <Hero />
      <Equity/>
      <OpenAccount />
      <Brokerage />
      <AoCharges/>
      <OvCharges/>
    </>
  );
}

export default PricingPage;
