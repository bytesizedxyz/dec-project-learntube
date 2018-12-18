import { fireEvent, waitForElement } from 'react-testing-library';

export const inputChangeTestCase = async (inputField, getByLabelText, value) => {
  let input;
  input = getByLabelText(inputField);
  expect(input.value).toBe('');
  fireEvent.change(input, {
    target: { value }
  });
  input = await waitForElement(() => getByLabelText(inputField));
  expect(input.value).toBe(value);
};

export const inputChange = async (inputField, getByLabelText, value) => {
  const input = getByLabelText(inputField);
  fireEvent.change(input, {
    target: { value }
  });
};
