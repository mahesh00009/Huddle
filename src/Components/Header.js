import React from 'react'
import { StyledHeader } from './Styled/Styled.Header'
import Styled from './Styled/Styled'
import { Nav, Logo, Image} from './Styled/Styled.Header'
import { Button } from './Styled/Button.styled'

import { Flex } from './Styled/Flex.styled'


const Header = () => {
  return (

    <StyledHeader>
        <Styled>

            <Nav>
                <Logo src = "./images/logo.svg" alt = ""></Logo>
                <Button>Try it Free</Button>
            </Nav>

            <Flex>
              <div>
                <h1>Build The Community Your Fans Will Love</h1>

                <p> Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.</p>

              <Button bg = "#ff0099" color = "#fff">Get Started For Free</Button>
              </div>

              <Image src = "./images/illustration-mockups.svg" alt = ""></Image>


            </Flex>

        </Styled>
    </StyledHeader>

  )
}

export default Header