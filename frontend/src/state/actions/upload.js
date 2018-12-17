import { navigate } from "@reach/router";

export const UPLOAD_VIDEO = "VIDEO_UPLOAD";

const uploadVideo = [
  {
    URL: "20vDj6oQ-pE",
    Title: "Backstreet Boys - Chances (Behind The Scenes)",
    posted_by: "7ec1c457-3b54-448a-9185-c161edcf43db"
  }
];

//redux thunk action creator
export const uploadVideo = (
  title,
  url,
  post_by,
  validationErrorMsg,
  uploadResult
) => (dispatch, getState) => {

  let videoUpload = {};

  console.log(getState());

  const video = uploadVideo.reduce((acc, curr, i));
};