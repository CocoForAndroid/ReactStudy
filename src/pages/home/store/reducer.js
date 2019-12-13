import {fromJS} from 'immutable'

const defaultState = fromJS({
    recommendList: [],
    articleList: [],
    writers: []
});

export default (state = defaultState, action) => {
    console.log('action' + action.articleList);
    if (action.type === 'change_home_data') {
        return state.merge({
            'recommendList': fromJS(action.recommendList),
            'articleList': fromJS(action.articleList),
            'writers': fromJS(action.writers)
        });
    } else {
        return state
    }

}
