import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type VarAttributes = HTMLGlobalAttributes;

export interface VarElementOptions {
  classes?: string[];
  attributes?: VarAttributes;
}

export const var = (
  content: string | HTMLTemplate,
  { attributes, classes }: VarElementOptions = {},
) =>html`<var ${
  attributeList<VarAttributes>(attributes, classes)
}>${content}</var>`;

  