import React, {Component} from 'react';
import {HomeLeft, HomeRight, HomeWrapper} from "./style";
import List from './components/List'
import Recommend from "./components/Recommend";
import DownLoadApp from "./components/DownLoadApp";
import Writer from "./components/Writer";
import {connect} from 'react-redux'
import {actionCreators} from "./store";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img"
                         src="https://upload.jianshu.io/admin_banners/web_images/4816/c4a3e25c0e339848d4f04a264623666f16fd3602.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                         alt=""/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <DownLoadApp/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.changeHomeData()
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    }
});
export default connect(null, mapDispatch)(Home);
