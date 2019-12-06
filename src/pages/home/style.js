import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width : 960px
    margin: 0 auto
    overflow:hidden
`
export const HomeLeft = styled.div`
    width : 625px
    margin-left:15px
    padding-top:30px
    float:left
    .banner-img {
        height:240px
        width:100%
        border-radius:10px
        }
`

export const HomeRight = styled.div`
    width : 240px
    float:right    
`

export const ListItem = styled.div`
    padding:20px 0px
    overflow:hidden
    border-bottom:1px solid #dcdcdc
    .item-img{
        width:150px
        display:block
        height:100px
        float:right
        border-radius:10px
    }
`
export const ListInfo = styled.div`
    font-size:18px
    width:475px
    float:left
    .title{
        max-width: 450px;
        font-weight:700
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;        
    }
    .content{
        font-size:13px
        color:#999
        margin:15px 10px 8px 0px
        line-height:24px
    }
`
