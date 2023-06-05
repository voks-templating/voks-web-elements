import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type NavAttributes = HTMLGlobalAttributes;

export interface NavElementOptions {
  classes?: string[];
  attributes?: NavAttributes;
}

export const nav = (
  content: string | HTMLTemplate,
  { attributes, classes }: NavElementOptions = {},
) =>
  html`<nav ${
    attributeList<NavAttributes>(attributes, classes)
  }>${content}</nav>`;
