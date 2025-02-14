import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Sentinel"
        productDesription="Our high-performance trading platform powered by AI-driven sentiment analysis. Access real-time insights, dynamic charts, and seamless trading experiences on Android and iOS."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="InsightHub"
        productDesription="Your central dashboard for portfolio management. Gain comprehensive insights into your trades and investments through intuitive visualizations and reports."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="MutualPoint"
        productDesription="Invest in direct mutual funds commission-free. Manage your investments conveniently with our seamless app experience available on Android and iOS."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="TraderConnect API"
        productDesription="Develop robust trading platforms and applications with our simple, secure APIs. Build innovative investment solutions for an engaged client base."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="LearnOn Mobile"
        productDesription="Master the stock market with bite-sized lessons and interactive illustrations. Our easy-to-follow content keeps you learning on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Investlink.tech blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
