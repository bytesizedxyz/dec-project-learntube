const express = require('express');
const router = express.Router();
const { getVideos, createVideo, updateVideo } = require("../services/Video");


/* Get routes */

router.get('/', (req, res, next) => {
  getVideos().then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).send({err:"something happened on our end! Please try again later"})
  })
});

router.get('/:id', (req, res, next) => {
  getVideos(req.params.id).then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).send({err:"something happened on our end! Please try again later"})
  })
});

/* POST ROUTES */

router.post('/', (req, res, next) => {
  createVideo(req.body).then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).send({err:"something happened on our end! Please try again later"})
  })
});


/* PATCH ROUTES */
router.patch('/:id', (req, res, next) => {
  updateVideo(req.body, req.params.id).then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).send({err:"something happened on our end! Please try again later"})
  })
});




module.exports = router;
