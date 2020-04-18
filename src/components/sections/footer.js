import React from "react"
import styled from "styled-components"

const Footer = () => (
  <FooterWrapper id="footer">
    <Copyright>
      Copyright &copy; 2020 WinBack, Inc. All rights reserved.
    </Copyright>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
`

const Copyright = styled.p`
  background-color: white;
  padding: 25px;
  text-align: center;
`

export default Footer
