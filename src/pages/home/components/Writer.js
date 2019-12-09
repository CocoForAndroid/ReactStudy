import React, {Component} from 'react';
import {WriterWrapper} from '../style'
class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <div className="title">
                    <p>推荐作者</p>
                    <p>换一批</p>
                </div>
                <div className="list-wrapper">
                    <img src="https://upload.jianshu.io/users/upload_avatars/6652326/ba6106f4-20eb-4735-885d-561083bd4e55.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>

                </div>
            </WriterWrapper>
        );
    }
}

export default Writer;
