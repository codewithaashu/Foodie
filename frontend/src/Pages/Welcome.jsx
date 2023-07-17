import React from "react";
import Header from "../Components/Header";
import WelcomeHero from "../Components/WelcomeHero";
import Footer from "../Components/Footer";

const Welcome = () => {
  return (
    <>
      <Header isWelcome={true} />
      <WelcomeHero />
      <Footer />
    </>
  );
};

export default Welcome;
