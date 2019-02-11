import React from "react";
import { Accordion, Panel } from "react-bootstrap";

const GenericModalMenuSection = ({
  sectionKey,
  sectionTitle,
  sectionBsStyle,
  sectionContent,
  applicationMenuActiveKey,
  setApplicationMenuActiveKey,

}) => {
  return (
    <Accordion
      key={sectionKey}
      name={sectionKey}
      style={{marginBottom:6}}
      defaultActiveKey={applicationMenuActiveKey || sectionKey}
      onSelect={() => {
        if (applicationMenuActiveKey === sectionKey) {
          setApplicationMenuActiveKey("none");
        } else {
          setApplicationMenuActiveKey(sectionKey);
        }
      }}
    >
      <Panel header={sectionTitle} eventKey={sectionKey} bsStyle={sectionBsStyle}>
        {sectionContent}
      </Panel>
    </Accordion>
  );
};
export default GenericModalMenuSection;
