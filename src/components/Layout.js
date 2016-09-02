import React, { PropTypes } from 'react';
import { Navbar , Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button }  from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
          <LinkContainer to={{ pathname: '/' }}>
              <a >VerDIS</a>
            </LinkContainer>
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
          <LinkContainer to={{ pathname: '/foo', query: { bar: 'baz' } }}>
            <NavItem eventKey={1} href="#">Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {this.props.children}
      </div>
    )
  }
}


// const Layout = (props) => {
//   return  (
//     <div>
//     <Navbar inverse>
//       <Navbar.Header>
//         <Navbar.Brand>
//         <LinkContainer to={{ pathname: '/' }}>
//             <a >VerDIS</a>
//           </LinkContainer>
//         </Navbar.Brand>
//         <Navbar.Toggle />
//       </Navbar.Header>
//       <Navbar.Collapse>
//         <Navbar.Form pullLeft>
//         <FormGroup>
//           <FormControl type="text" placeholder="Kassenzeichen" />
//         </FormGroup>
//         {' '}
//         <Button type="submit">Suchen</Button>
//       </Navbar.Form>
//         <Nav pullRight>
//         <NavDropdown eventKey={3} title="Versiegelte Flächen" id="basic-nav-dropdown">
//           <MenuItem eventKey={3.1}>Versiegelte Flächen</MenuItem>
//           <MenuItem eventKey={3.2}>ESW</MenuItem>
//           <MenuItem eventKey={3.3}>Info</MenuItem>
//           <MenuItem eventKey={3.4}>Versickerung</MenuItem>
//         </NavDropdown>
//         <LinkContainer to={{ pathname: '/foo', query: { bar: 'baz' } }}>
//           <NavItem eventKey={1} href="#">Login</NavItem>
//           </LinkContainer>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//     {props.children}
//     </div>
//   );
// };

//
// Layout.propTypes = {
//   children: PropTypes.element
// };
//
// Layout.componentDidMount = () => {
//   console.log("componentDidMount");
// }
// export default Layout;
