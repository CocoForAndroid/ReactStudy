import React,{Fragment} from 'react'
import TodoItem from "./TodoItem"
export default class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:"fuck",
            list:[]
        }
        this.handleChange = this.handleChange.bind(this)
    }
    render(){
        return(
            <Fragment>
                <input value={this.state.inputValue} onChange={this.handleChange}></input>
                <button onClick={this.handleOnClick.bind(this)}>提交</button>
                <ul>
                    {
                    this.state.list.map((it,index)=>{
                       return <TodoItem 
                                deleteItem={this.handleDeleteItem.bind(this) }
                                item={it} 
                                index={index} 
                                key={index}/>
                    })
                    }
                </ul>
            </Fragment>
        )
    }
    handleChange(e){
        const value = e.target.value
        this.setState({
            inputValue:value
        })
    }
    handleOnClick(){
        const value = this.state.inputValue
        const list = [...this.state.list,value]
        this.setState({
            list
        })
    }
    handleDeleteItem(index){
        let list = [...this.state.list]
         list = list.splice(index,1)
         console.log(list)
        this.setState({
            list
        })
    }
}