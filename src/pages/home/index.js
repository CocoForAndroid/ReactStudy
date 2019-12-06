import React, {Component} from 'react';
import {HomeLeft, HomeRight, HomeWrapper} from "./style";
import List from './components/List'
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4816/c4a3e25c0e339848d4f04a264623666f16fd3602.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <List/>
                </HomeLeft>
                <HomeRight>right</HomeRight>
            </HomeWrapper>
        );
    }
}

export default Home;
