const UPLOAD = "/upload";
const uploadData = {
  data: {
    message: "Success"
  }
};

const mockAxios = {
  create: () => mockAxios,
  get: url => Promise.resolve(),
  post: url => {
    console.log("THE URL: ", url);
    switch (url) {
      case UPLOAD:
        return Promise.resolve(uploadData);
    }
  },
  noPost: url => {
    return Promise.resolve({ data: { message: "Should never see this." } });
  }
};

// This is what is called a manual mock
// Documentation -> https://jestjs.io/docs/en/manual-mocks
module.exports = mockAxios;
