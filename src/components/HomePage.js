import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import VerdisMap from './VerdisMap';
const HomePage = () => {
  return (
    // <VerdisMap>x</VerdisMap>
  <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
    <Tab eventKey={1} title="Karte"><VerdisMap>x</VerdisMap></Tab>
    <Tab eventKey={2} title="Info">Tab 2 content</Tab>
    <Tab eventKey={3} title="Tabelle" disabled>Tab 3 content</Tab>
  </Tabs>
);
};

export default HomePage;
