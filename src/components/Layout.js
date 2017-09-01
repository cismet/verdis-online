import PropTypes from 'prop-types';
import React from 'react';
import { connect } from "react-redux";
import AppNavbar from '../containers/AppNavbar';

export class Layout_ extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar />
        {this.props.children}
      </div>
    );
  }
}

const Layout = connect()(Layout_);
export default Layout;

Layout_.propTypes = {
  children: PropTypes.element
};
