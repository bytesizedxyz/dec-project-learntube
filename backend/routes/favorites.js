const express = require('express');
const router = express.Router();

const JWTMiddleware = require("../middleware/jwtMiddleware")
const { SUCCESS, INTERNAL_SERVER_ERROR } = require('../SERVER_CONSTANTS').statusCodes;
const { favoriteVideo } = require("../services/Favorites");

// router.use(JWTMiddleware)

router.post('/:id', (req, res, next) => {
  favoriteVideo({user:req.body.user, video_id:req.params.id}).then(data => {
    res.status(SUCCESS).json(data);
  })
  .catch(err => {
    console.log("err:", err)
    res.status(INTERNAL_SERVER_ERROR).send({err:"something happened on our end! Please try again later"})
  })
});





module.exports = router;
