import styled from "styled-components";

import {ReactComponent as burger} from '../assets/icons/burger.svg'
import {ReactComponent as search} from '../assets/icons/search.svg'
import {ReactComponent as bell} from '../assets/icons/bell.svg'
import {ReactComponent as menu} from '../assets/icons/menu.svg'
// import {ReactComponent as video} from '../assets/icons/video.svg'


export const Container = styled.div`
display: flex;
flex-direction: ${({flex}) => !flex&&'column'};
height: 100vh;
background: #212121;
color: #FFFFFF;
padding: ${({flex}) => !flex&&'0 30px'};
`

export const Wrapper = styled.div`
display: flex;
height: 60px;
align-items: center;
justify-content: space-evenly;
`

export const Category =styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: ${({end})=> end && 'flex-end'};
`

export const Icons = styled.div``

Icons.Burger = styled(burger)`
width: 24px;
height: 24px;
`
Icons.Bell = styled(bell)`
width: 28px;
height: 28px;
margin-left: 20px;
cursor: pointer;
`
Icons.Menu = styled(menu)`
width: 24px;
height: 24px;
margin-left: 20px;
cursor: pointer;
`
Icons.Menu = styled(menu)`
width: 28px;
height: 28px;
margin-left: 20px;
cursor: pointer;
`
Icons.Logo = styled.img`

`
Icons.Search = styled(search)`
width: 55px;
height: 31px;
padding: 10px 20px;
background: rgba(255, 255, 255, 0.2);
border-radius: 0px 2px 2px 0px;
cursor: pointer;

`

export const Input =styled.input`
height: 30px;
background: #000000;
width: 100%;
font-size: 18px;
max-width: 500px;
border: 1px solid rgba(255, 255, 255, 0.6);
border-radius: 2px 0px 0px 2px;
box-sizing: border-box;
:focus{
    outline: none;
}
color: rgba(255, 255, 255, 0.2);
padding-left: 10px;

`

export const User = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin-left: 20px;
cursor: pointer;
`

