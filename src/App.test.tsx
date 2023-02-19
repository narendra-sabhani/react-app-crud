import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import * as reactRedux from 'react-redux';
import UploadDownload from './Components/UploadDownload';

test('renders Home text | check h3 is present', () => {
  const { container } = render(<Home />);
  const h3 = container.querySelector("h3");
  expect(h3).toBeInTheDocument();
})

test('renders h3 text', () => {
  render(<Home />);
  const linkElement = screen.getByText("Welcome to the Demo React App with MUI!.");
  expect(linkElement).toBeInTheDocument();
});

// describe("Add User component", () => {
//   it("should render Add User component correctly", () => {
//     render(<AddUser />);
//     const element = screen.getByRole("heading");
//     expect(element).toBeInTheDocument();
//   });
// });

// test('renders file upload ', () => {
//   render(<UploadDownload />);
//  screen.debug();
// });

