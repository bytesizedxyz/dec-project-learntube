const request = require("supertest");
const server = require("../../server");
const User = require("../../db/knex");
const {
  UNPROCESSABLE_ENTITY,
  BAD_REQUEST,
  SUCCESS
} = require("../../SERVER_CONSTANTS").statusCodes;
const {
  playlistInfo,
  goodUserInfo,
  badUserInfo,
  playlistVideos,
  badPlaylistInfo
} = require("./mockDataToExpect");
const { postRequest, getRequest, putRequest, deleteRequest } = require("../mockRequests");

let createdRequest;
describe("playlists routes", () => {
  beforeAll(async done => {
    createdRequest = await request.agent(server);
    done();
  });

  //close the server
  afterAll(async done => {
    await server.close();
    console.log("server closed!");
    done();
  });

  describe("it can retrieve the user playlists and handle them", () => {
    it("recieved the playlist back", async () => {
      const response = await getRequest(createdRequest, `/playlists/all/${goodUserInfo.uuid}`);
      console.log(response.body);
      expect(response.body).toEqual(playlistInfo);
    });

    it("recieve error when wrong user uuid is sent", async () => {
      const response = await getRequest(createdRequest, `/playlists/all/${badUserInfo.uuid}`);
      console.log(response.body);
      expect(response.status).toEqual(UNPROCESSABLE_ENTITY);
      expect(response.body.error).toBe("error retrieving playlists");
    });
  });

  describe("it can retrieve the playlist videos of a playlist", () => {
    it("can retrieve the videso", async () => {
      const response = await getRequest(createdRequest, `/playlists/${playlistInfo[0].uuid}`);
      console.log(response.body);
      expect(response.body).toEqual(playlistVideos);
      expect(response.body.error).toBe(undefined);
    });

    it("it recieves a wrong playlist uuid", async () => {
      const response = await getRequest(createdRequest, `/playlists/${badPlaylistInfo.uuid}`);
      console.log(response.body);
      expect(response.status).toEqual(UNPROCESSABLE_ENTITY);
      expect(response.body.error).toBe("Bad playlist request");
    });
  });
  //TODO post playlist, and new videos to that playlist
  // update a playlist
  //
  describe("it can create a playlist", () => {
    it("successfully creates a playlist", async () => {
      const response = await postRequest(createdRequest, `/playlists/playlist`, {
        title: "ScottyDoesntKnow",
        user_uuid: "77469083-1fd1-46a7-8be5-5218c7f4a31a"
      });
      expect(response.body.title).toEqual("ScottyDoesntKnow");
      expect(response.body.user_uuid).toEqual("77469083-1fd1-46a7-8be5-5218c7f4a31a");
      expect(response.body.uuid).toBeTruthy();
    });

    it("can check the body and throw an error for missing fields", async () => {
      const response = await postRequest(createdRequest, `/playlists/playlist`, {
        title: "ScottyDoesntKnow"
      });
      expect(response.body.error).toBe("Please send the right info.");
    });

    it("can add videos to a playlist", async () => {
      const response = await postRequest(createdRequest, `/playlists/playlist_video`, {
        playlist_uuid: "19c74a16-d208-45b5-a243-9d4a171e0778",
        video_uuid: "a5cc69f4-39f3-4a53-a22a-307c1764ccae"
      });
      expect(response.body.message).toBe("You have successfully added a video to your playlist");
    });
  });

  describe("It can update playlists", () => {
    it("updates the playlist title", async () => {
      const response = await putRequest(
        createdRequest,
        `/playlists/playlist_video/${playlistInfo[1].uuid}`,
        {
          title: "ScottyDoesntKnow"
        }
      );
      expect(response.body.title).toBe("ScottyDoesntKnow");
    });
  });

  xdescribe("it can delete a playlist", () => {
    it("successfully deletes a playlist", async () => {
      const response = await deleteRequest(createdRequest, `/playlists/${playlistInfo.uuid}`);
      expect(response.body).toEqual(true);
    });
  });
});
