const UPLOAD = 'https://dry-river-42897.herokuapp.com/videos';
const uploadData = {
  data: [
    {
      uuid: 'Success'
    }
  ]
};

const mockAxios = {
  create: () => mockAxios,
  get: url => Promise.resolve(),
  post: url => {
    console.log('THE URL: ', url);
    switch (url) {
      case UPLOAD:
        return Promise.resolve(uploadData);
    }
  },
  noPost: url => {
    return Promise.resolve({ data: { message: 'Should never see this.' } });
  }
};

// This is what is called a manual mock
// Documentation -> https://jestjs.io/docs/en/manual-mocks
module.exports = mockAxios;
