import React, {Component} from 'react';
import {ListInfo, ListItem} from '../style'
import {connect} from 'react-redux'
class List extends Component {

    render() {
        const {list} = this.props;
        return (
            <div>
                {
                    list.map((item)=>{
                        return(<ListItem>
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
    list:state.get('home').get('list')
})

export default connect(mapState)(List);
