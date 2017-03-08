import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Modal, ProgressBar, Button } from 'react-bootstrap';
import * as UiStateActions from '../actions/uiStateActions';
import { WAITING_TYPE_MESSAGE, WAITING_TYPE_ERROR, WAITING_TYPE_INFO } from '../constants/uiConstants';


function mapStateToProps(state) {
  return {
    uiState: state.uiState
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
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }



  close() {
    this.props.uiActions.showWaiting(false);
  }
  open() {
    this.props.uiActions.showWaiting(true);
  }


  render() {
    let title = null;
    if (this.props.uiState.waitingMessage == null) {
      title = (<Modal.Title>Laden</Modal.Title>);
    }
    else {
      title = (<Modal.Title>{this.props.uiState.waitingMessage}</Modal.Title>);
    }

    let style = null;
    let footer = (<Modal.Footer />);
    if (this.props.uiState.waitingType == WAITING_TYPE_ERROR) {
      style = "danger";
      footer = (
        <Modal.Footer>
          <Button onClick={this.close}>Ok</Button>
        </Modal.Footer>
      );
    }
    else if (this.props.uiState.waitingType == WAITING_TYPE_INFO) {
      style = "info";
    }
    else {
      style = null;
    }




    return (
      <Modal animation={this.props.uiState.waitingUIAnimation} show={this.props.uiState.waitingVisible} onHide={this.close}>
        <Modal.Header >
          {title}
        </Modal.Header>
        <Modal.Body>
          <ProgressBar bsStyle={style} active now={100} />
        </Modal.Body>
        {footer}
      </Modal>
    );
  }
}

const Waiting = connect(mapStateToProps, mapDispatchToProps)(Waiting_);
export default Waiting;

Waiting_.propTypes = {
  uiActions: PropTypes.object,
  uiState: PropTypes.object
};
