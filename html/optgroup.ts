import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type OptgroupAttributes = HTMLGlobalAttributes;

export interface OptgroupElementOptions {
  classes?: string[];
  attributes?: OptgroupAttributes;
}

export const optgroup = (
  content: string | HTMLTemplate,
  { attributes, classes }: OptgroupElementOptions = {},
) =>html`<optgroup ${
  attributeList<OptgroupAttributes>(attributes, classes)
}>${content}</optgroup>`;

  