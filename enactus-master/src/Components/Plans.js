import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import WeeklyPlans from "./WeeklyPlans";
import OrganisedPrograms from "./OrganisedPrograms";

function Plans() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={12}>
          <ListGroup horizontal>
            <ListGroup.Item action href="#link1">
              WeeklyPlans
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              OrganisedPrograms
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <div
          style={{
            width: "100%",
            height: "90%",
            overflowY: "scroll",
          }}
        >
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <WeeklyPlans />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <OrganisedPrograms />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </div>
      </Row>
    </Tab.Container>
  );
}

export default Plans;
