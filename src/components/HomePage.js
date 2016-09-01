import React from 'react';
import {Link} from 'react-router';
import { Tab, Tabs } from 'react-bootstrap';
const HomePage = () => {
  return (
  <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
    <Tab eventKey={1} title="Karte">Tab 1 content</Tab>
    <Tab eventKey={2} title="Info">Tab 2 content</Tab>
    <Tab eventKey={3} title="Tabelle" disabled>Tab 3 content</Tab>
  </Tabs>
);
};

export default HomePage;
