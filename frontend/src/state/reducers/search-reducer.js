import {SEARCH_VIDEOS} from '../actions/search-actions'


const initialState = { }


export default reducer= (state = initialState, action) => {
    switch(action.type) {
        case Search: 
        const {SEARCH_VIDEOS} = action;
        const search = state.contents.filter((videoDataDontKnowYet) => videoDataDontKnowYet.includes(videoDataDontKnowYet));
        return {...state, vid_id, search};  
    }
    default:
        return state;
    }
