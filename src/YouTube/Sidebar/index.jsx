import React, { Component } from 'react'
import { Container, Title, Wrapper } from '../Sidebar/style'
import { sidebar } from '../../utils/sidebar'


export default class Sidebar extends Component {
  render() {
    return (
      <Container>

        {
          sidebar.map((value) => (
            <Wrapper key={value.id} style={{borderBottom: '1px solid white'}}>
             { value.title && <Title title>{value.title}</Title>}
              {
                value.data.map((item)=> (
                  <Title>{item.title}</Title>
                ))
              }
            </Wrapper>
          ))
        }

      </Container>
    )
  }
}
