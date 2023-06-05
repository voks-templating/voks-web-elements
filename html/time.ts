import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TimeAttributes = HTMLGlobalAttributes;

export interface TimeElementOptions {
  classes?: string[];
  attributes?: TimeAttributes;
}

export const time = (
  content: string | HTMLTemplate,
  { attributes, classes }: TimeElementOptions = {},
) =>
  html`<time ${
    attributeList<TimeAttributes>(attributes, classes)
  }>${content}</time>`;
