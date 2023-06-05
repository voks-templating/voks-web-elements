import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HgroupAttributes = HTMLGlobalAttributes;

export interface HgroupElementOptions {
  classes?: string[];
  attributes?: HgroupAttributes;
}

export const hgroup = (
  content: string | HTMLTemplate,
  { attributes, classes }: HgroupElementOptions = {},
) =>html`<hgroup ${
  attributeList<HgroupAttributes>(attributes, classes)
}>${content}</hgroup>`;

  