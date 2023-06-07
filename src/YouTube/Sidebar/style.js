import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 300px;
border: 1px solid white;
height: 100vh;
overflow-y: auto
`

export const Wrapper = styled.div`
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
margin: 10px 0px;
`

export const Title = styled.div`
display: flex;
align-items: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;
height: 40px;
color: ${({title}) => title ? 'rgba(255, 255, 255, 0.6)' : '#FFFFFF'};
margin-left: 24px;
`



