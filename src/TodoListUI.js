import React, {Component} from 'react';
import {Input, Button, List} from 'antd';
import {ADD_TO_ITEM, DELETE_ITEM, CHANGE_INPUT_VALUE} from "./store/actionTypes";
class TodoListUi extends Component {
    render() {
        return (
            <div>
                <div style={{margin: '10px'}}>
                    <Input onChange={this.props.handleChangeInput} placeholder="todo info"
                           style={{width: '300px', marginRight: '10px'}} value={this.props.inputValue}/>
                    <Button type="primary" onClick={this.handleClick}>提交</Button>
                    <List
                        style={{marginTop: '10px', width: '300px'}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={this.handleDelete.bind(this, index)}>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default TodoListUi;