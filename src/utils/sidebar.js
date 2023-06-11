import styled from 'styled-components'
import { ReactComponent as home } from '../assets/icons/home.svg'
import { ReactComponent as explore } from '../assets/icons/compus.svg'
import { ReactComponent as subs } from '../assets/icons/subscribers.svg'
import { ReactComponent as library } from '../assets/icons/library.svg'
import { ReactComponent as history } from '../assets/icons/history.svg'
import { ReactComponent as tubevideos } from '../assets/icons/videos.svg'
import { ReactComponent as watchlater } from '../assets/icons/watchlater.svg'
import { ReactComponent as likedvideo } from '../assets/icons/liked.svg'
import { ReactComponent as showmore } from '../assets/icons/search.svg'
import { ReactComponent as img1 } from '../assets/icons/img1.svg'




const Icons = styled.div`

`

Icons.Home = styled(home)`
width: 16px;
height: 16px;
`
Icons.Explore = styled(explore)`
width: 16px;
height: 16px;
`

Icons.Subscription = styled(subs)`
width: 16px;
height: 16px;
`

Icons.Library = styled(library)`
width: 16px;
height: 16px;
`
Icons.History = styled(history)`
width: 16px;
height: 16px;
`

Icons.Videos = styled(tubevideos)`
width: 16px;
height: 16px;
`

Icons.Watchlater = styled(watchlater)`
width: 16px;
height: 16px;
`
Icons.Liked = styled(likedvideo)`
width: 16px;
height: 16px;
`

Icons.Search = styled(showmore)`
width: 16px;
height: 16px;
`

Icons.Img1 = styled(img1)`
width: 24px;
height: 24px;
`

export const sidebar = [
  {
    id:1,
        title: '',
        data: [
          { id:1, title:'Home', icon:Icons.Home},
          { id:2, title:'Explore', icon:Icons.Explore},
          { id:3, title:'Subscription', icon:Icons.Subscription},
    ],
  
},

  {
    id:2,
        data: [
            { id:1, title:'Library', icon:Icons.Library},
            { id:2, title:'History', icon:Icons.History},
            { id:3, title:'YouTube Videos', icon:Icons.Videos},
            { id:4, title:'Watch Later', icon:Icons.Watchlater},
            { id:5, title:'Liked Videos', icon:Icons.Liked},
            { id:6, title:'Show more', icon:Icons.Search},
    ]
  },


  {
    id:3,
        title: 'Subscriptions',
        data: [
            { id:1, title:'WebBrain Academy', icon:Icons.Img1},
            { id:2, title:'WebBrain Academy', icon:Icons.Home},
            { id:3, title:'WebBrain Academy', icon:Icons.Home},
            { id:4, title:'WebBrain Academy', icon:Icons.Home},
            { id:5, title:'WebBrain Academy', icon:Icons.Home},
            { id:6, title:'WebBrain Academy', icon:Icons.Home},
            { id:7, title:'WebBrain Academy', icon:Icons.Home},
            { id:8, title:'WebBrain Academy', icon:Icons.Home},
    ],
},

{
    id:4,
        title: 'More From YouTube',
        data: [
            { id:1, title:'YouTube Premium', icon:Icons.Home},
            { id:2, title:'Settings', icon:Icons.Home},
            { id:3, title:'Help', icon:Icons.Home},
            { id:4, title:'Report', icon:Icons.Home}
    ],
},


  
    
]