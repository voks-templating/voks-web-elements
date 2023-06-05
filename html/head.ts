import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HeadAttributes = HTMLGlobalAttributes;

export interface HeadElementOptions {
  classes?: string[];
  attributes?: HeadAttributes;
}

export const head = (
  content: string | HTMLTemplate,
  { attributes, classes }: HeadElementOptions = {},
) =>
  html`<head ${
    attributeList<HeadAttributes>(attributes, classes)
  }>${content}</head>`;
