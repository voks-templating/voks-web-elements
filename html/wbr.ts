import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type WbrAttributes = HTMLGlobalAttributes;

export interface WbrElementOptions {
  classes?: string[];
  attributes?: WbrAttributes;
}

export const wbr = (
  content: string | HTMLTemplate,
  { attributes, classes }: WbrElementOptions = {},
) =>html`<wbr ${
  attributeList<WbrAttributes>(attributes, classes)
}>${content}</wbr>`;

  