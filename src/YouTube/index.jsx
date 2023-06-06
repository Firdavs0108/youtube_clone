import React, { Component } from 'react'
import { Category, Container, Wrapper } from './style'
import Sidebar from './Sidebar'
import Body from './Body'

export default class YouTube extends Component {
  render() {
    return (
      <Container>
            <Wrapper>
              <Category>Birinchi</Category>
              <Category>Ikinchi</Category>
              <Category>Uchinchi</Category>
            </Wrapper>
      
      <Container flex>
            <Sidebar/>
            <Body/>
        </Container>
         </Container>
    )
  }
}
