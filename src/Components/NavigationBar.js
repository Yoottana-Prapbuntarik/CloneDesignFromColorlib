import React, { Component } from 'react';
import {
    Collapse, Navbar, NavbarToggler,
    Nav, NavItem,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';



class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: false
        }
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <div>
                <Navbar light className="fixed-top"  expand="md" style={{
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    backgroundColor: "rgba(255,255,255,1)",
                    padding: '25px'

                }}>
                    <div className="container text-center">
                        < Link className="navbar-brand" to="/">reactstrap</ Link>
                        <NavbarToggler onClick={this.toggleNavbar} />
                        <Collapse isOpen={this.state.collapsed} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className="NavbarLink">
                                    <NavLink to="/">Home</NavLink>
                                </NavItem>
                                <NavItem className="NavbarLink">
                                    <NavLink to="/About">About</NavLink>
                                </NavItem>
                                <NavItem className="NavbarLink">
                                    <NavLink to="/">Link</NavLink>
                                </NavItem>
                                <NavItem className="NavbarLink">
                                    <NavLink to="/About">Link</NavLink>
                                </NavItem>
                                <NavItem className="NavbarLink">
                                    <NavLink to="/">Link</NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

            </div >
        )
    }
}

export default NavigationBar


