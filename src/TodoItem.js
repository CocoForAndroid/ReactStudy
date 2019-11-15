import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }
    render() {
        const {item} = this.props
        return (
            <div onClick={this.handleDeleteItem}>
                {item} 
            </div>
            
        )
    }
    handleDeleteItem(){
      this.props.deleteItem(this.props.index)
    }
   
}
TodoItem.propTypes={
    item:PropTypes.string.isRequired,
    deleteItem:PropTypes.func
}
TodoItem.defaultProps={
    item:"hello world"
}