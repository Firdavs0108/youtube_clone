import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 250px;
height: 100vh;
overflow-y: scroll;
background: #212121;
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
font-weight: normal;
font-size: 18px;
line-height: 20px;
height: 40px;
color: ${({title}) => title ? 'rgba(255, 255, 255, 0.6)' : '#FFFFFF'};
margin-left: 24px;
`;

export const ItemWrapper = styled.div`
display: flex;
align-items: center;
cursor: pointer

`
