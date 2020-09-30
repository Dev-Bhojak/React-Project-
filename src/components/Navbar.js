import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button"

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <i className="fas fa-mobile-alt fa-3x"></i>
                </Link>
                <ul className="navbar-nav  align-items-center">
                    <li className="nav-item ml-4">
                        <Link to="/" className="nav-link">
                            <h3>Old Phones</h3>
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer cart>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                        my Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
color:var(--mainWhite)!important;
font-size: 1.3rem;
text-transform: capitalize;
}
`