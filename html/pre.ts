import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type PreAttributes = HTMLGlobalAttributes;

export interface PreElementOptions {
  classes?: string[];
  attributes?: PreAttributes;
}

export const pre = (
  content: string | HTMLTemplate,
  { attributes, classes }: PreElementOptions = {},
) =>
  html`<pre ${
    attributeList<PreAttributes>(attributes, classes)
  }>${content}</pre>`;
