import React from 'react';
import { Nav , Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`

.navbar {
    background-color: #123888;
}

.navbar-brand, .navbar-nav .nav-link {

    color: #335;

&:hover {
    color: black;
}



}


`;
export const NavigationBar = () => (
<Styles>
    <Navbar expand="lg">
        <Navbar.Brand href = "/">Horror Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls = "basic-navbar-nav" />
        <Navbar.Collapse id= "basic-navbar-nav">
            <Nav className = "ml-auto">
                <Nav.Item><Nav.Link href= "/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href= "/AvailableMovies">AvailableMovies</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href= "/Register">Register</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href= "/Booking">Booking</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href= "/Tickets">Tickets</Nav.Link></Nav.Item>




            </Nav>
        </Navbar.Collapse>
    </Navbar>
</Styles>


)
