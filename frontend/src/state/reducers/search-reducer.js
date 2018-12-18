import { SEARCH_VIDEOS } from "../actions/search";

const initialState = {};

export default (reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_VIDEOS:
      const search = state.contents.filter(videoDataDontKnowYet =>
        videoDataDontKnowYet.includes(videoDataDontKnowYet)
      );
      return { ...state, vid_id, search };
    default:
      return state;
  }
});
