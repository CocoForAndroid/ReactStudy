import { SEARCH_FOCUS, SEARCH_BLUR } from "./constants"
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
    if (action.type === SEARCH_FOCUS) {
        //set方法会结合之前Immutable之前的值和设置的值，返回一个全新state对象，没有修改原始的state
        return state.set('focused', true)
    } else if (action.type === SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state
}
