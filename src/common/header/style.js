import styled from 'styled-components'
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
    height:56px;
    position:fixed
    top: 0
    right:0
    background:white
    z-index:99
    left:0
    border-bottom:1px solid #f0f0f0
`
export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain
`
export const Nav = styled.div`
    width:900px
    margin:0 auto
    padding-right:70px
    height:100%
`
export const NavItem = styled.div`
    line-height:56px
    padding:0 15px
    font-size:17px
    &.left{
        float:left
        color:#333
    }
    &.right{
        float:right
        color:#969696
     }
    &.active{
        color:#ea6f5a
    } 
`
export const SearchWrapper = styled.div`
    position:relative
    float:left
    .slide-enter{
        transition:all .2s ease-out   
        width:160px 
    }
    .slide-enter-active{
        width:240px
    }
    .slide-exit{
        transition:all .2s ease-in  
    }
    .slide-exit-active{
        width:160px 
    }
    .iconfont {
        position:absolute
        right:5px
        bottom:5px
        width:30px
        line-height:30px
        border-radius:50%
        text-align:center
        &.focused {
            background:#777
            color:white
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    background:#eee
    font-size:14px
    margin-left:20px
    box-sizing:border-box
    padding:0 30px 0 20px
    color:#666
    border-radius:16px;
    margin-top:9px
    &::placeholder {
        color:#999
    }
    &.focused {
        width:240px
    }
`
export const Addition = styled.div`
    position:absolute
    right:10px
    top:0
    height:56px
`
export const Button = styled.div`
    float:right
    line-height:38px
    margin-top:9px
    padding:0 20px
    font-size:14px
    border-radius : 19px
    border : 1px solid #ec6149
    &.reg {
        color:#ec6148
    }
    &.writing{
        margin-left:20px
        color:#fff
        background:#ec6149
    }
`
export const SearchInfo = styled.div`
    position:absolute
    left : 0
    top:56px
    padding: 0 20px
    width:240px
    background:white
    box-shadow:0 0 8px rgba(0,0,0,.2)
`

export const SearchTitle = styled.div`
    margin-top : 20px
    margin-bottom: 15px
    line-height: 20px
    font-size: 14px
    color: #969696
`
export const SearchInfoSwitch = styled.span`
    float:right
    font-size:12px
`
export const SearchInfoItem = styled.a`
    font-size:12px
    padding:0 5px
    line-height:20px
    border:1px solid #ddd
    display:block
    float:left
    margin-right:10px
    color:#787878
    border-radius:3px
    margin-bottom:15px
`
export const SearchInfoList = styled.div`
    overflow:hidden
`
