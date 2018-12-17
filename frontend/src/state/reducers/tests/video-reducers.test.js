import store from "../../index";
import { viewVideo, retrieveVideosForListing } from "../../actions/video";

describe("video-actions integration tests", () => {
  const { dispatch, getState } = store;
  it("update the video currently being viewed", () => {
    // let currentViewedVideo;
    // retrieveVideosForListing()(dispatch, getState);
    // currentViewedVideo = getState().videoState.currentViewedVideo;
    // console.log(getState());
    // expect(currentViewedVideo).toBe(null);
    // viewVideo("QaVXaMFc6gk")(dispatch, getState);
    // currentViewedVideo = getState().videoState.currentViewedVideo;
    // expect(currentViewedVideo.url).toBe("QaVXaMFc6gk");
  });
});
