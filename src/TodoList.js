import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import store  from './store'

export default class TodoList extends Component {
    constructor(props){
        super(props)
        console.log(store.getState())
        this.state = store.getState()
    }

    render() {
        return (
            <div>
                <div style={{ margin: '10px' }}>
                    <Input placeholder="todo info" style={{ width: '300px', marginRight: '10px' }} value = {this.state.inputValue} />
                    <Button type="primary">提交</Button>
                    <List
                        style={{marginTop:'10px',width:'300px'}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (
                            <List.Item>
                               {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}
