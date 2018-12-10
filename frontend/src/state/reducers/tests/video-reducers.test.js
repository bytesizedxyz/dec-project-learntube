import store from "../../index";
import { viewVideo } from "../../actions/video-actions";

describe("video-actions unit tests", () => {
    it("a call to the viewVideo function action creator should return a function.", () => {
      expect(typeof viewVideo()).toBe("function");
    });
  });
  
  describe("video-actions integration tests", () => {
    const { dispatch, getState } = store;
    it("update the video currently being viewed", () => {
      let currentViewedVideo;

      currentViewedVideo = getState().videoState.currentViewedVideo;
      expect(currentViewedVideo).toBe(null);

      viewVideo("QaVXaMFc6gk")(dispatch, getState);
      
      currentViewedVideo = getState().videoState.currentViewedVideo;
      expect(currentViewedVideo.uuid).toBe("QaVXaMFc6gk");
    });
  });
  