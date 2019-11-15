import React, { Component } from 'react'

export default class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }
    render() {
        return (
            <div onClick={this.handleDeleteItem}>
                {this.props.item} 
            </div>
        )
    }
    handleDeleteItem(){
      this.props.deleteItem(this.props.index)
    }
}
