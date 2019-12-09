import React, {Component} from 'react';
import {DownLoadWrapper} from '../style'
class DownLoadApp extends Component {
    render() {
        return (
            <DownLoadWrapper>
                <img  className="qr-code-style" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                <div className="content">
                    <p>下载简书手机APP></p>
                    <p>随时随地发现和创作内容</p>
                </div>
            </DownLoadWrapper>
        );
    }
}

export default DownLoadApp;
