import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  DropdownItem,
} from 'reactstrap';

import './styles.css'

import logo from '../../assets/images/logo192.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="header" color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/"><img className="logo" src={logo} alt="Logo da XP investimentos" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/courses">Nossos Cursos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.xpi.com.br/" target="_blank" >Investimentos</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/game" >Game</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Ajuda
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Quem somos
                </DropdownItem>
                <DropdownItem>
                  FQS
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Contate-nos
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Link className="btn btn-success" tag={Link} to="/login" >Entrar</Link>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
