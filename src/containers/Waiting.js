import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Modal , ProgressBar }  from 'react-bootstrap';
import * as UiStateActions from '../actions/uiStateActions';


function mapStateToProps(state) {
  return {
    uiState:state.uiState
  };
}
function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UiStateActions, dispatch),
  };
}

export class Waiting_ extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.close=this.close.bind(this);
    this.open=this.open.bind(this);
  }



  close() {
    this.props.uiActions.showWaiting(false);
  }
  open() {
    this.props.uiActions.showWaiting(true);
  }

  render() {

    return (
        <Modal show={this.props.uiState.waitingVisible} onHide={this.close}>
          <Modal.Header >
            <Modal.Title>Laden</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ProgressBar active now={100} />
          </Modal.Body>
          <Modal.Footer />
        </Modal>
    );
  }
}

const Waiting = connect(mapStateToProps,mapDispatchToProps)(Waiting_);
export default Waiting;

Waiting_.propTypes = {
  uiActions: PropTypes.object,
  uiState: PropTypes.object
};
