import styled from 'styled-components'
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
    height:56px;
    position:relative
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
    .iconfont {
        position:absolute
        right:5px
        bottom:5px
        width:30px
        line-height:30px
        background:orange
        border-radius:50%
        text-align:center
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    background:#eee
    font-size:14px
    margin-left:20px
    box-sizing:border-box
    padding:0 20px
    border-radius:16px;
    margin-top:9px
    &::placeholder {
        color:#999
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
