import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Montserrat', sans-serif;
  background-color: #fff;
  z-index: 5;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavigationListItem = styled.li`
  font-weight: 600;
  margin-left: 32px;
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;
  transition: 0.3s;

  :hover {
    border-bottom: 2px solid black;
    border-top: 2px solid transparent;
  }
`;

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <Link to="/">
        HATTA
      </Link>
      </Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/about">
          about
        </Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/articles">
          articles
        </Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/gallery">
          gallery
        </Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/contact">
          contact
        </Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;