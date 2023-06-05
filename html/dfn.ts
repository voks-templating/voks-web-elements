import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DfnAttributes = HTMLGlobalAttributes;

export interface DfnElementOptions {
  classes?: string[];
  attributes?: DfnAttributes;
}

export const dfn = (
  content: string | HTMLTemplate,
  { attributes, classes }: DfnElementOptions = {},
) =>html`<dfn ${
  attributeList<DfnAttributes>(attributes, classes)
}>${content}</dfn>`;

  