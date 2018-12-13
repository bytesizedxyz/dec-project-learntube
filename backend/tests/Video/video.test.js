var assert = require('assert');
const {
  getVideos
} = require("../../services/Video")

describe('Videos tests', function () {
  it('Return all videos', async function () {
    getVideos().then(data => {
      console.log("Videos:", data.length)
      assert.notEqual(data.length, 0);
    })

  });

  it('Return a video from id', function () {
    getVideos('b691a150-007a-4406-bf8d-6a4600c3e104').then(data => {
      assert.deepEqual({
        "uuid": "b691a150-007a-4406-bf8d-6a4600c3e104",
        "url": "https://youtu.be/ipObSiFHpyY",
        "watch_count": 0,
        "username": "Scotty61",
        "title": "I AM NOT JESSICA CHASTAIN (Bryce Dallas Howard)"
      }, data)
    })
  });
});