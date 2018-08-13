import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo.svg'
import styled from 'styled-components'
import Img from 'gatsby-image'

const HeaderWrapper = styled.div`
  background: #524763;
  marginBottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 70vh;
  h1 {
    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  maxWidth: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`;

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Level Up Logo"/>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}
      sizes={data.background.sizes}
    />
  </HeaderWrapper>
)

export default Header;
