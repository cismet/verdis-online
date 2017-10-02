import React from 'react';
import { Redirect } from 'react-router-dom';

// Since this component is simple and static, there's no parent container for it.
const RedirectVersiegelteFlaechen = () => {
  return (
    <Redirect to="/versiegelteflaechen"/>
  );
};

export default RedirectVersiegelteFlaechen;