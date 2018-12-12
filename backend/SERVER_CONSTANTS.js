module.exports = {
  statusCodes: {
    SUCCESS: 200,
    NO_CONTENT: 204,
    NOT_MODIFIED: 304,
    BAD_REQUEST: 400,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500
  },
  tableNames: {
    USERTABLE: 'users',
    PLAYLISTTABLE: 'playlist',
    PLAYLISTVIDEOTABLE: 'playlist_video',
    VIDEOTABLE: 'videos',
    USERVIEWTABLE: 'user_views',
    FAVORITES: 'favorites'
  }
};