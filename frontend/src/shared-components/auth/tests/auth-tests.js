import React from 'react'
import {render, fireEvent, cleanup, } from 'react-testing-library'
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import axiosMock from 'axios'
import SignUpPage from '../signup'
import LoginPage from '../login'
import { signup } from '../../../state/actions/auth';
//import Fetch from '../fetch' 
//KentC was using fetch in the docs im not sure how it works tho.


afterEach(cleanup)

//--------------------------SIGNUPTESTS-------------------------------------
test('clicks signup button', () => {
    const signupClick = jest.fn()
    const {getByText} = render(<SignUpPage/>)
  
    fireEvent.click(getByText('Sign up'))
    expect(signupClick).toHaveBeenCalledTimes(1)

  })

test('can fill in --SignUp-- correct username', () => {
  const {getByTestId} = render(<SignUpPage/>)
  const usernameInput = getByTestId('username')

  fireEvent.change(usernameInput, {
    target: {value: 'Bob'},
  })
    expect(usernameInput.value).toEqual('Bob')
}),

test('can fill in --SignUp-- correct password', () => {
  const {getByTestId} = render(<SignUpPage/>)
  const passwordInput = getByTestId('password')

  fireEvent.change(passwordInput, {
    target: {value: 'password123'},
  })
  expect(passwordInput.value).toEqual('password123')
}),


test('password Confirm matches true', () => {
  const {getByTestId} = render(<SignUpPage/>)
  const passwordConfirm = getByTestId('passwordConfirm')
  const passwordInput = getByTestId('password')

  fireEvent.change(passwordConfirm, { target: {value: 'passwordConfirm'}
  })
  expect(passwordConfirm.value).toMatch(passwordInput.value)
}),


test('can fill in correct email', () => {
  const {getByTestId} = render(<SignUpPage/>)
  const emailInput = getByTestId('email')

  fireEvent.change(emailInput, {target: {value: 'BobSmith@gmail.com'}
})
expect(emailInput.value).toEqual('BobSmith@gmail.com')
}),




//--------------------------LOGIN TESTS---------------------------------------
test('clicks login button', () => {
  const loginClick = jest.fn()
  const {getByText} = render(<loginPage/>)

  fireEvent.click(getByText('Login'))
  expect(loginClick).toHaveBeenCalledTimes(1)
}),


test('can fill --login-- correct username', () => {
  const {getByTestId} = render(<LoginPage/>)
  const usernameInput = getByTestId('username')

  fireEvent.change(usernameInput, {
    target: {value: 'Bob'},
  })
    expect(usernameInput.value).toEqual('Bob')
}),

test('can fill --login-- correct password', () => {
  const {getByTestId} = render(<LoginPage/>)
  const passwordInput = getByTestId('password')

  fireEvent.change(passwordInput, {
    target: {value: 'password123'},
  })
  expect(passwordInput.value).toEqual('password123')
})








//------------------------SEARCH TESTS--------------------------------------

// test('searchs for videos', () => {
//   const searchClick = jest.fn()
//   const {getByText} = render (<searchComponentGoesHereWhenItGetsMade/>)

//   fireEvent.click(geByText('search'))
//   expect(searchClick).toHaveBeenCalledTimes(1)
// })
