import React from 'react';
import { render } from "@testing-library/react";
import Company from "../company/Company";
import About from "../company/About";
import BlogPost from "../company/BlogPost";
import Exemplar from "../company/Exemplar";
import Features from "../company/Features";
import Footer from "../company/Footer";
import Header from "../company/Header";
import LatestNews from "../company/LatestNews";
import SocialBrand from "../company/SocialBrand";

const company = <Company url="/company" />;
const about = <About />;
const blogPost = <BlogPost />;
const exemplar = <Exemplar />;
const features = <Features />;
const footer = <Footer />;
const header = <Header />;
const news = <LatestNews />;
const social = <SocialBrand />;

it("company rendered successfully", () => {
  const { queryByTestId } = render(company);
  expect(queryByTestId("company")).toBeTruthy();
})

it("about rendered successfully", () => {
  const { queryByTestId } = render(about);
  expect(queryByTestId("about")).toBeTruthy();
})

it("blogPost rendered successfully", () => {
  const { queryByTestId } = render(blogPost);
  expect(queryByTestId("blog-post")).toBeTruthy();
})

it("exemplar rendered successfully", () => {
  const { queryByTestId } = render(exemplar);
  expect(queryByTestId("exemplar")).toBeTruthy();
})

it("features rendered successfully", () => {
  const { queryByTestId } = render(features);
  expect(queryByTestId("features")).toBeTruthy();
})

it("footer rendered successfully", () => {
  const { queryByTestId } = render(footer);
  expect(queryByTestId("footer")).toBeTruthy();
})

it("header rendered successfully", () => {
  const { queryByTestId } = render(header);
  expect(queryByTestId("header")).toBeTruthy();
})

it("news rendered successfully", () => {
  const { queryByTestId } = render(news);
  expect(queryByTestId("news")).toBeTruthy();
})

it("social rendered successfully", () => {
  const { queryByTestId } = render(social);
  expect(queryByTestId("social")).toBeTruthy();
})
