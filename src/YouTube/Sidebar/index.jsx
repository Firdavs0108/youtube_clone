import React, { Component } from 'react'
import { Container, ItemWrapper, Title, Wrapper } from '../Sidebar/style'
import { sidebar } from '../../utils/sidebar'


export default class Sidebar extends Component {
  render() {
    return (
      <Container>

        {
          sidebar.map(({icon,id, title,data}, index) => (
            <Wrapper key={index}>
             { title && <Title title = 'true'>{title}</Title>}
              {
               data.map(({icon:Icon, title: subTitle}, index)=> (

                <ItemWrapper key={index}>

                  <Icon/>
                  <Title>{subTitle}</Title>

                </ItemWrapper>
                ))
              }
            </Wrapper>
          ))
        }

      </Container>
    )
  }
}
