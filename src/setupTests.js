/* global jest */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock Docusaurus
jest.mock("@docusaurus/core", () => ({
  useDocusaurusContext: () => ({
    siteConfig: {
      title: "Test Site",
      tagline: "Test Tagline",
    },
  }),
}));

// Mock CSS modules
jest.mock("*.module.css", () => ({}));

// Mock static assets
jest.mock("*.png", () => "test-file-stub");
jest.mock("*.jpg", () => "test-file-stub");
jest.mock("*.jpeg", () => "test-file-stub");
jest.mock("*.svg", () => "test-file-stub"); 