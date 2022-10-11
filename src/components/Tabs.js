import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";

//Images
import imgTab1 from "../assets/tab/tab-1.jpg";
import imgTab2 from "../assets/tab/tab-2.jpg";
import imgTab3 from "../assets/tab/tab-3.jpg";

//Content
import Content from "./Content";

function Tabss() {
  return (
    <>
      <Accordion defaultActiveKey="0" className="d-md-none">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Home</Accordion.Header>
          <Accordion.Body>
            <Content imageSource={imgTab1} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Profile</Accordion.Header>
          <Accordion.Body>
            <Content imageSource={imgTab2} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Contact</Accordion.Header>
          <Accordion.Body>
            <Content imageSource={imgTab3} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="d-none d-md-block">
        <Tabs defaultActiveKey="one" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="one" title="Home">
            <Content imageSource={imgTab1} />
          </Tab>
          <Tab eventKey="two" title="Profile">
            <Content imageSource={imgTab2} />
          </Tab>
          <Tab eventKey="three" title="Contact">
            <Content imageSource={imgTab3} />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Tabss;
