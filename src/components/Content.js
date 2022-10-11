//TABS
import React from "react";

function content(props) {
  return (
    <>
      <p>
        Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
        laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus
        non maximus. Sed condimentum mattis rhoncus.
      </p>
      <img src={props.imageSource} />
    </>
  );
}

export default content;
