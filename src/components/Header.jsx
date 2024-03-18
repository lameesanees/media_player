import React from "react";
import { Container, NavbarBrand } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Navbar className="shadow bg-secondary">
                <Container >
                    <Navbar.Brand as={Link} to="/" style={{ color: '#ffffff', }}>
                    <i className="fa-brands fa-google-play fa-beat-fade fa-xl" style={{color: '#B197FC'}}></i>
                        {' '}
                        Media Player
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;
