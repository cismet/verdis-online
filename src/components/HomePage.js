import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import VerdisMap from './VerdisMap';

const style = {
  backgroundColor: "red",
  height: "100%",
  overflowY: "auto"
};

export default class HomePage extends React.Component {
  handleResize(e) {
    console.log("size changed",e);
  }

  render() {
    return (
      // <VerdisMap>x</VerdisMap>
    <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
      <Tab eventKey={1} title="Karte"><div>
        <VerdisMap/>
        </div>
        </Tab>
      <Tab eventKey={2} title="Info"><div style={style}>
        Tab 2 content

        </div></Tab>
      <Tab eventKey={3} title="Tabelle" disabled>Tab 3 content</Tab>
    </Tabs>
  );
  }
}
