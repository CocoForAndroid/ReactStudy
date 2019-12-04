import React,{Component} from 'react';
import { CSSTransition } from "react-transition-group";
import {
    Addition, Button, HeaderWrapper, Logo, Nav
    , NavItem, NavSearch, SearchWrapper, SearchInfo, SearchTitle,
    SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from "./style";
import { connect } from "react-redux";
import * as actionCreator from './store/actionCreator';

class Header extends Component{

    getListArea(show) {
        if (show) {
            return (
                <SearchInfo>
                    <SearchTitle>
                        热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchTitle>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render(){
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={200} in={this.props.focused} classNames='slide'>
                            <NavSearch className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleFocus}
                                onBlur={this.props.handleInputBlur} />
    
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>
                        {this.getListArea(this.props.focused)}
                    </SearchWrapper>
    
                </Nav>
                <Addition>
                    <Button className='writing'><i className="iconfont">&#xe61b;</i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    
    }
}

 


//映射state和props
const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(actionCreator.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur())
        }
    }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);
