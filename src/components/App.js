import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar , Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button }  from 'react-bootstrap';
const App = (props) => {
  return  (
    <div>
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">VerDIS</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>

        <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Kassenzeichen" />
        </FormGroup>
        {' '}
        <Button type="submit">Suchen</Button>
      </Navbar.Form>
        <Nav pullRight>
        <NavDropdown eventKey={3} title="Versiegelte Flächen" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Versiegelte Flächen</MenuItem>
          <MenuItem eventKey={3.2}>ESW</MenuItem>
          <MenuItem eventKey={3.3}>Info</MenuItem>
          <MenuItem eventKey={3.4}>Versickerung</MenuItem>
        </NavDropdown>
          <NavItem eventKey={1} href="#">Login</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {props.children}
    </div>
  );
};



//   (
//     <div>
//
//         <IndexLink to="/">Home</IndexLink>
//         {' | '}
//         <Link to="/about">About</Link>
//         <br/><br/>
//         {props.children}
//       </div>  );
// };
App.propTypes = {
  children: PropTypes.element
};

export default App;
