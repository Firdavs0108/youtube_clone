import React, { Component } from 'react'
import { Container } from '../Body/style'
import Card from './Card'
import { data } from '../../mock'


export default class Body extends Component {
  render() {
    return (
        <Container>
        {
          data.map((value)=>(

            <Card 

             view= '1M'
             time= '10 minuts before'
            name = {'Fredrick'}
            
            user={
              'https://th.bing.com/th/id/OIP.fJjbDVuSPbOe8u1R4egfVgHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3'
            } 
            video={
              'https://th.bing.com/th/id/OIP.Y14cYx3WdjOWeuATH9gJIgHaDd?pid=ImgDet&w=206&h=95&c=7&dpr=1.3'
            } 
              />
          ))
        }
          
      </Container>
    )
  }
}
