import React from 'react'
import Styled from './Styled/Styled'
import { Flex } from './Styled/Flex.styled'
import { StyledFooter } from './Styled/Footer.styled'

const Footer = () => {
  return (
    <StyledFooter>
        <Styled>
            <img src="./images/logo_white.svg" alt="" />

            <Flex>
            <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+88 73334986</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul> 
            </Flex>

            <p> &copy; Huddle 2023. All Rights Reserved </p>
        </Styled>
    </StyledFooter>
  )
}

export default Footer