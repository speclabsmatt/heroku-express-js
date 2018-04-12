import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class CustomNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-expand-md fixed-top navbar-dark bg-medium" dark expand="md">
        {/* <div className="nav-container"> */}
        <div className="container">
          <NavbarBrand href="/"><span className="align-middle">TEFLspace</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2 top-input" type="text" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-search my-2 my-sm-0" type="submit">Search</button>
        </form> */}
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Jobs</NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle /*add caret here */>
                Log in / Register
                {/* <span className="fa-custom"> <i class="fas fa-user-circle"></i></span> mclanier */}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  {/* <i className="fas fa-cog"></i> Settings */}
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          </div>
          {/* </div> */}
        </Navbar>
        
            <div className="nav-scroller bg-white box-shadow">
            <div className="container">
      <Nav className="nav nav-underline">
        <a className="nav-link active" href="#">
            Jobs 
            <span className="badge badge-pill bg-light align-text-bottom">321</span>
        </a>
        <a className="nav-link" href="#">
          Job-Seekers
          <span className="badge badge-pill bg-light align-text-bottom">27</span>
        </a>
        <a className="nav-link" href="#">Resources</a>
        <a className="nav-link" href="#">Community</a>
      </Nav>
    </div>
</div>
        {/* <div className="container">
        <div className="nav-scroller bg-white box-shadow">
            <Nav className="nav nav-underline" expand="md">
                <a className="nav-link active" href="#">Dashboard</a>
                <a className="nav-link" href="#">
                    Friends
                    <span className="badge badge-pill bg-light align-text-bottom">27</span>
                </a>
                <a className="nav-link" href="#">Explore</a>
                <a className="nav-link" href="#">Suggestions</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
                <a className="nav-link" href="#">Link</a>
            </Nav>
            </div>
            </div> */}
      </div>
    );
  }
}