import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type RtAttributes = HTMLGlobalAttributes;

export interface RtElementOptions {
  classes?: string[];
  attributes?: RtAttributes;
}

export const rt = (
  content: string | HTMLTemplate,
  { attributes, classes }: RtElementOptions = {},
) =>
  html`<rt ${attributeList<RtAttributes>(attributes, classes)}>${content}</rt>`;
