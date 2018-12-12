const express = require('express');
const router = express.Router();
const { SUCCESS, INTERNAL_SERVER_ERROR } = require('../SERVER_CONSTANTS').statusCodes;

const { getVideos, createVideo, updateVideo } = require("../services/Video");


/* Get routes */

router.get('/', (req, res, next) => {
  getVideos().then(data => {
    res.status(SUCCESS).json(data);
  })
  .catch(err => {
    res.status(INTERNAL_SERVER_ERROR).send({err:"something happened on our end! Please try again later"})
  })
});

router.get('/:id', (req, res, next) => {
  getVideos(req.params.id).then(data => {
    res.status(SUCCESS).json({body:"User successfully created"});
  })
  .catch(err => {
    res.status(INTERNAL_SERVER_ERROR).send({err:"something happened on our end! Please try again later"})
  })
});

/* POST ROUTES */

/* Expects
 *  {
 *    title: string,
 *    url: string,
 *    posted_by: user_uuid
 *  }
 */

router.post('/', (req, res, next) => {
  createVideo(req.body).then(data => {
    res.status(SUCCESS).json(data);
  })
  .catch(err => {
    console.log("err:", err)
    res.status(INTERNAL_SERVER_ERROR).send({err:"something happened on our end! Please try again later"})
  })
});

/* Expects one or more of any:
 *  {
 *    title: string,
 *    url: string,
 *    posted_by: user_uuid
 *  }
 */
/* PATCH ROUTES */
router.patch('/:id', (req, res, next) => {
  updateVideo(req.body, req.params.id).then(data => {
    res.status(SUCCESS).json(data);
  })
  .catch(err => {
    res.status(INTERNAL_SERVER_ERROR).send({err:"something happened on our end! Please try again later"})
  })
});




module.exports = router;
