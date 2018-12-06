import {SEARCH_VIDEOS} from '../actions/search'


const initialState = { }


export default reducer= (state = initialState, action) => {
    switch(action.type) {
        case Search: 
        const {SEARCH_VIDEOS} = action;
        const search = state.contents.filter((vid_id) => vid_id.includes(vid_id));
        return {...state, vid_id, search};
    }
    default:
        return state;
    }
