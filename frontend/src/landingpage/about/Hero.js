import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered sentiment-based stock trading in India
          <br />
          Now, we are transforming investments with cutting-edge technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We started operations on the 1st of January, 2015 with a mission to
            simplify investments and trading by leveraging advanced sentiment
            analysis and AI-driven insights. The company was named Investlink to
            signify the strong link between investors and informed decision-making.
          </p>
          <p>
            Today, our innovative investment models and user-friendly platforms
            have made us a trusted name among tech-savvy investors in India.
          </p>
          <p>
            Over 2+ Lakh clients place thousands of orders daily through our
            intuitive trading ecosystem, contributing to dynamic and smarter trading decisions.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            We are committed to empowering retail traders and investors through
            transparent educational resources and actionable insights.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              InvestLink Labs
            </a>
            , our research and innovation hub, collaborates with data scientists and
            developers to create smarter solutions for trading and portfolio management.
          </p>
          <p>
            Stay updated with the latest industry trends and platform updates by
            following our blog or catching media coverage on our groundbreaking initiatives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
