import React from "react";
import Forms from "../components/Forms";
import ListGroup from "react-bootstrap/ListGroup";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>Submit your details</h1>
          <div class="row">
            <div class="col-md order-md-2">
              <ListGroup>
                <ListGroup.Item>
                  <i class="fa-solid fa-xl fa-envelope"></i>
                  <p>hello@yay.com</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i class="fa-solid fa-xl fa-phone-flip"></i>
                  <p>123 456 7890</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <i class="fa-solid fa-xl fa-location-dot"></i>
                  <ul>
                    <li>123 Some Street</li>
                    <li>Somewhere</li>
                    <li>Some City</li>
                    <li>10000</li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div class="col-md order-md-1">
              <Forms />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
