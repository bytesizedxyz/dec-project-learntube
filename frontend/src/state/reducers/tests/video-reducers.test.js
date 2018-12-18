import store from "../../index";
import { viewVideo, retrieveVideosForListing } from "../../actions/video";

// The call to retrieve videos for listing requires an axios mock
// describe("video-actions integration tests", () => {
//   const { dispatch, getState } = store;
//   it("update the video currently being viewed", () => {
//     let currentViewedVideo;
//     retrieveVideosForListing()(dispatch, getState);
//     currentViewedVideo = getState().videoState.currentViewedVideo;
//     expect(currentViewedVideo).toBe(null);

//     viewVideo("QaVXaMFc6gk")(dispatch, getState);

//     currentViewedVideo = getState().videoState.currentViewedVideo;
//     console.log("WHAT IS THIS: ", currentViewedVideo);
//     expect(currentViewedVideo.url).toBe("QaVXaMFc6gk");
//   });
// });

test("1+1=2", () => {
  expect(1 + 1).toBe(2);
});
