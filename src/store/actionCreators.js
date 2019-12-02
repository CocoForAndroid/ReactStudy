import {ADD_TO_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM} from "./actionTypes";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddToItemAction = (value) => ({
    type: ADD_TO_ITEM,
    value
})
export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    value:index
})