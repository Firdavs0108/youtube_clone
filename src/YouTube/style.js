import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: ${({flex}) => !flex&&'column'};
height: 100vh;
background: #212121;
color: #FFFFFF;
padding: ${({flex}) => !flex&&'0 30px'};
`

export const Wrapper = styled.div`
border: 1px solid yellow; 
display: flex;
height: 60px;
align-items: center;
justify-content: space-between;
`

export const Category =styled.div`
display: flex;
border: 1px solid green;
`

export const Icons = styled.div``

Icons.Burger = styled()