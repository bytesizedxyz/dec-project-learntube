const request = require("supertest");
const server = require("../../server");
const User = require("../../db/knex");
const {
  UNPROCESSABLE_ENTITY,
  BAD_REQUEST,
  SUCCESS
} = require("../../SERVER_CONSTANTS").statusCodes;
const { playlistInfo, goodUserInfo, badUserInfo, playlistVideos } = require("./mockDataToExpect");
const { postRequest, getRequest, dropCollection, parseJson } = require("../mockRequests");

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
      const response = await getRequest(createdRequest, `/playlist/${playlistInfo[0].uuid}`);
      console.log(response.body);
      expect(response).toEqual(badUserInfo);
    });
  });
});
