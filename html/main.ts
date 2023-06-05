import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MainAttributes = HTMLGlobalAttributes;

export interface MainElementOptions {
  classes?: string[];
  attributes?: MainAttributes;
}

export const main = (
  content: string | HTMLTemplate,
  { attributes, classes }: MainElementOptions = {},
) =>
  html`<main ${
    attributeList<MainAttributes>(attributes, classes)
  }>${content}</main>`;
