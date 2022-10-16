//TABS
import React from "react";

function content(props) {
  return (
    <div className="tab-container">
      <div className="tab-container_image">
        <img src={props.imageSource} />
      </div>

      <div className="tab-container_text_media">
        <div className="tab-container_text">
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
            laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.
          </p>
        </div>

        <div className="tab-container_media">
          <p>SHARE</p>
          <i class="fa-brands fa-xl fa-facebook-f"></i>
          <i class="fa-brands fa-xl fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default content;
