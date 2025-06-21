/* global describe, test, expect */
import React from "react";
import { render, screen } from "@testing-library/react";
import HomepageFeatures from "./index";

describe("HomepageFeatures", () => {
  test("renders without crashing", () => {
    render(<HomepageFeatures />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("renders feature list", () => {
    render(<HomepageFeatures />);
    const featureList = screen.getByRole("list");
    expect(featureList).toBeInTheDocument();
  });

  test("renders multiple features", () => {
    render(<HomepageFeatures />);
    const features = screen.getAllByRole("listitem");
    expect(features.length).toBeGreaterThan(0);
  });
}); 