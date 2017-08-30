import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Modal, Button, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';
import * as UiStateActions from '../actions/uiStateActions';
import * as KassenzeichenActions from '../actions/kassenzeichenActions';


function mapStateToProps(state) {
  return {
    uiState: state.uiState
  };
}
function mapDispatchToProps(dispatch) {
  return {
    kassZActions: bindActionCreators(KassenzeichenActions, dispatch),
    uiActions: bindActionCreators(UiStateActions, dispatch),

  };
}

export class SearchKassenzeichen_ extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.close = this.close.bind(this);
    this.search = this.search.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  close() {
    this.props.uiActions.showKassenzeichenSearch(false);
  }

  search() {
    this.props.uiActions.showKassenzeichenSearch(false);
    this.props.kassZActions.searchByKassenzeichen(this.input);
  }
  handleInputChange(e) {
    this.input = e.target.value;
  }

  render() {
    return (
      <Modal show={this.props.uiState.searchKassenzeichenVisible && this.props.uiState.succesfullLogin} onHide={this.close} keyboard={true}>
        <Modal.Header  >
          <Modal.Title>Kassenzeichen Suche</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup controlId="inputKassenzeichen">
              <Col componentClass={ControlLabel} sm={4}>
                Kassenzeichen
               </Col>
              <Col sm={6}>
                <FormControl type="kassZ" placeholder="Geben Sie hier das Kassnzeichen an." onChange={this.handleInputChange} />

              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Abbrechen</Button>
          <Button bsStyle="primary" onClick={this.search}>Suchen</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}



const SearchKassenzeichen = connect(mapStateToProps, mapDispatchToProps)(SearchKassenzeichen_);
export default SearchKassenzeichen;

SearchKassenzeichen_.propTypes = {
  uiActions: PropTypes.object,
  kassZActions: PropTypes.object,
  uiState: PropTypes.object
};
