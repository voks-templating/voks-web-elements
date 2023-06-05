import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DdAttributes = HTMLGlobalAttributes;

export interface DdElementOptions {
  classes?: string[];
  attributes?: DdAttributes;
}

export const dd = (
  content: string | HTMLTemplate,
  { attributes, classes }: DdElementOptions = {},
) =>
  html`<dd ${attributeList<DdAttributes>(attributes, classes)}>${content}</dd>`;
