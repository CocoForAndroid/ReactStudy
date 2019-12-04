import React, {Component} from 'react';
import {CSSTransition} from "react-transition-group";
import {Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper} from "./style";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleFocus = this.handleFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }

    handleFocus() {
        this.setState({
            focused: true
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false
        })
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载APP</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={200} in={this.state.focused} classNames='slide'>
                            <NavSearch className={this.state.focused ? 'focused' : ''} onFocus={this.handleFocus}
                                       onBlur={this.handleInputBlur}/>

                        </CSSTransition>
                        <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>
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
const mapStateToProps = ()=>{

}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
