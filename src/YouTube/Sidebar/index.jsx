import React, { Component } from 'react'
import { Container, ItemWrapper, Title, Wrapper } from '../Sidebar/style'
import { sidebar } from '../../utils/sidebar'


export default class Sidebar extends Component {
  render() {
    return (
      <Container>

        {
          sidebar.map(({icon,id, title,data}) => (
            <Wrapper key={id}>
             { title && <Title title>{title}</Title>}
              {
               data.map(({icon:Icon, title: subTitle})=> (

                <ItemWrapper style={{display: 'flex'}}>

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
