import React, {Component} from 'react';
import {WriterItem, WriterWrapper} from '../style'
import {connect} from 'react-redux'

class Writer extends Component {
    //格式化显示用户的关注数与写的文字数
    formatDesc(item) {
        let followNumber = parseInt(item.get("follow"))
        let writeNumber = parseInt(item.get("writeWords"))
        if(followNumber>1000){
            followNumber= (followNumber/1000).toFixed(1)+"k"
        }
        if(writeNumber>1000){
            writeNumber= (writeNumber/1000).toFixed(1)
        }
        return `写了${writeNumber}字 ${followNumber}喜欢`
    }

    render() {
        return (
            <WriterWrapper>
                <div className="title">
                    <p>推荐作者</p>
                    <p>换一批</p>
                </div>
                <div className="list-wrapper">
                    {
                        this.props.writers.map((item) => {
                            return (
                                <WriterItem>
                                    <img className="head-img"
                                         src={item.get('headImg')}
                                         alt=""/>
                                    <div className="user-info">
                                        <p className="user-name">{item.get('nickName')}</p>
                                        <p className="user-desc">{this.formatDesc(item)}</p>
                                    </div>
                                    <div className="follow">关注+</div>
                                </WriterItem>
                            )
                        })
                    }

                </div>
            </WriterWrapper>
        );
    }
}

const map2State = (state) => {
    return {
        writers: state.get('home').get('writers')
    }
}

export default connect(map2State, null)(Writer);
