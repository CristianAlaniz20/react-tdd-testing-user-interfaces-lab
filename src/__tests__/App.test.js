import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
it("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
});

it("displays an image of yourself with alt text identifying the content of the image", () => {
    // Arrange
    render(<App />)
    // Act
    const image = screen.getByAltText("profile-pic")
    //Assert
    expect(image).toBeInTheDocument()
});

it("displays a second-level heading with the text `About Me`", () => {
  // Arrange
  render(<App />)
  // Act
  const secondLevelHeading = screen.getByRole("heading", {
    name: /About Me/,
    exact: true,
    level: 2,
  })
  // Assert
  expect(secondLevelHeading).toBeInTheDocument()
});

it("displays a paragraph for your biography", () => {
  // Arrange
  render(<App />)
  // Act
  const paragraph = screen.getByTestId("biography-paragraph")
  // Assert
  expect(paragraph).toBeInTheDocument()
});

it("displays a GitHub page link", () => {
  // Arrange
  render(<App />)
  // Act
  const gitHubLink = screen.getByRole("link", {
    name: /github/i,
  })
  // Assert
  expect(gitHubLink).toBeInTheDocument()
});

it("displays a LinkedIn page link", () => {
  // Arrange
  render(<App />)
  // Act
  const LinkedInLink = screen.getByRole("link", {
    name: /linkedin/i,
  })
  // Assert
  expect(LinkedInLink).toBeInTheDocument()
});