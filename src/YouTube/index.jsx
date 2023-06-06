import React, { Component } from 'react'
import { Container } from './style'
import Sidebar from './Sidebar'
import Body from './Body'

export default class YouTube extends Component {
  render() {
    return (
      <Container>
        <Sidebar/>
        <Body/>
      </Container>
    )
  }
}
