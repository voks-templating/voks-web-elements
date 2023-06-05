import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ArticleAttributes = HTMLGlobalAttributes;

export interface ArticleElementOptions {
  classes?: string[];
  attributes?: ArticleAttributes;
}

export const article = (
  content: HTMLTemplate,
  { attributes, classes }: ArticleElementOptions = {},
) =>
  html`<article ${
    attributeList<ArticleAttributes>(attributes, classes)
  }>${content}</article>`;
