import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ArticleAttributes = HTMLGlobalAttributes;

export const article = (
  content: HTMLTemplate,
  attributes: ArticleAttributes = {},
) =>
  html`<article ${
    attributeList<ArticleAttributes>(attributes)
  }>${content}</article>`;
