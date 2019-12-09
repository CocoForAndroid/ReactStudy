import React, {Component} from 'react';
import {ListInfo, ListItem} from '../style'
import {connect} from 'react-redux'
class List extends Component {

    render() {
        const {articleList} = this.props;
        return (
            <div>
                {
                    articleList.map((item)=>{
                        return(<ListItem key={item.get('id')}>
                            <img
                                alt=""
                                className="item-img"
                                src={item.get('img')}/>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="content">{item.get('content')}</p>
                            </ListInfo>
                        </ListItem>)
                    })
                }
            </div>

        );
    }
}

const mapState = (state)=>({
    articleList:state.get('home').get('articleList')
})

export default connect(mapState)(List);
