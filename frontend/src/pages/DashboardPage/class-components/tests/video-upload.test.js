import React from 'react';
import axios from 'axios';
import { render, fireEvent, cleanup, waitForElement, debugDOM } from 'react-testing-library';
import VideoUpload from '../video-upload';
import { inputChangeTestCase, inputChange } from './helpers';

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

jest.mock('axios');

test('VideoUpload state updates on title input onChange.', async done => {
  const { getByLabelText, debug } = render(<VideoUpload />);
  inputChangeTestCase('Title', getByLabelText, 'Woot!');
  done();
});

test('VideoUpload state updates on url input onChange.', async done => {
  const { getByLabelText, debug } = render(<VideoUpload />);
<<<<<<< HEAD
  inputChangeTestCase("Url", getByLabelText, "https://youtube.com");
=======
  inputChangeTestCase('URL', getByLabelText, 'https://youtube.com');
>>>>>>> fa1a26832e9d548f46011b3ffa8d4b39e4918e82
  done();
});

// NOTE: waitForElement will wait until the call to getByTestId is no longer returning an error.
test('VideoUpload makes a post request onClick and UI reflects state accordingly.', async done => {
  const { getByTestId, getByLabelText, debug } = render(<VideoUpload />);
  let headerOne;
  let headerTwo;
  headerOne = getByTestId('header-one');
  expect(headerOne).toHaveTextContent('Upload a video');

  // set up for allowing form to be submitted
<<<<<<< HEAD
  inputChange("Title", getByLabelText, "Woot!");
  inputChange("Url", getByLabelText, "https://youtube.com");
=======
  inputChange('Title', getByLabelText, 'Woot! My New Video');
  inputChange('URL', getByLabelText, 'https://www.youtube.com/watch?v=aB-UKwO367s');
>>>>>>> fa1a26832e9d548f46011b3ffa8d4b39e4918e82

  // spy and trigger axios.post request
  const postSpy = jest.spyOn(axios, 'post');
  fireEvent.click(getByTestId('upload-submit'));
  headerTwo = await waitForElement(() => getByTestId('header-two'));

  // verify result was retrieved from mocked axios post request
  // and that the Component's state change is visible in the UI
  expect(headerTwo).toHaveTextContent('Video Successfully Uploaded!');

  // Verify that the header text resets back to it's default state after one second.
  headerOne = await waitForElement(() => getByTestId('header-one'));
  expect(headerOne).toHaveTextContent('Upload a video');
  expect(postSpy).toBeCalled();
  done();
});

test("VideoUpload won't make a post request if title input length is less than 5.", async () => {
  const { getByTestId, getByLabelText, debug } = render(<VideoUpload />);
  let headerOne;
  headerOne = getByTestId('header-one');
  expect(headerOne).toHaveTextContent('Upload a video');

  // set up for preventing form from being submitted
<<<<<<< HEAD
  inputChange("Title", getByLabelText, "Woot");
  inputChange("Url", getByLabelText, "https://youtube.com");
=======
  inputChange('Title', getByLabelText, 'Woot');
  inputChange('URL', getByLabelText, 'https://youtube.com');
>>>>>>> fa1a26832e9d548f46011b3ffa8d4b39e4918e82

  // spy and hopefully not trigger axios.post request
  const postSpy = jest.spyOn(axios, 'noPost');
  fireEvent.click(getByTestId('upload-submit'));
  expect(postSpy).not.toBeCalled();
  const validationErrMsg = await waitForElement(() => getByTestId('validation-err-msg'));

  // verify result was retrieved from mocked axios post request
  // and that the Component's state change is visible in the UI
  expect(validationErrMsg).toHaveTextContent('title must be at least 5 characters.');

  // Verify that the header text never changed.
  headerOne = getByTestId('header-one');
  expect(headerOne).toHaveTextContent('Upload a video');
});

test("VideoUpload won't make a post request if url input length is less than 9.", async () => {
  const { getByTestId, getByLabelText, debug } = render(<VideoUpload />);
  let headerOne;
  headerOne = getByTestId('header-one');
  expect(headerOne).toHaveTextContent('Upload a video');

  // set up for preventing form from being submitted
<<<<<<< HEAD
  inputChange("Title", getByLabelText, "Woot!");
  inputChangeTestCase("Url", getByLabelText, "https://");
=======
  inputChange('Title', getByLabelText, 'Woot!');
  inputChangeTestCase('URL', getByLabelText, 'https://');
>>>>>>> fa1a26832e9d548f46011b3ffa8d4b39e4918e82

  // spy and trigger axios.post request
  const postSpy = jest.spyOn(axios, 'noPost');
  fireEvent.click(getByTestId('upload-submit'));
  expect(postSpy).not.toBeCalled();
  const validationErrMsg = await waitForElement(() => getByTestId('validation-err-msg'));

  // verify result was retrieved from mocked axios post request
  // and that the Component's state change is visible in the UI
  expect(validationErrMsg).toHaveTextContent('URL must be at least 9 characters.');

  // Verify that the header text never changed.
  headerOne = getByTestId('header-one');
  expect(headerOne).toHaveTextContent('Upload a video');
});
