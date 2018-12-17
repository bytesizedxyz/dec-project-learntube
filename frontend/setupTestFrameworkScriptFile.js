const mockNoop = () => new Promise(() => {});

// Notice how `create` was not being mocked here...
jest.mock('axios', () => ({
  default: mockNoop,
  get: mockNoop,
  post: mockNoop,
  put: mockNoop,
  delete: mockNoop,
  patch: mockNoop
}));
