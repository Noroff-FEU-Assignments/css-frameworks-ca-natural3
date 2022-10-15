import React from "react";
import Navbr from "../components/Navbr";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Tabs from "../components/Tabs";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <>
      <div className="wrapper">
        <Carousel />
        <div className="container">
          <h1>We do YAY things</h1>
          <p>
            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros
            pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus
            massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam,
            efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
            a, varius eget massa.
          </p>

          <Tabs />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
