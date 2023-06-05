import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TdAttributes = HTMLGlobalAttributes;

export interface TdElementOptions {
  classes?: string[];
  attributes?: TdAttributes;
}

export const td = (
  content: string | HTMLTemplate,
  { attributes, classes }: TdElementOptions = {},
) =>html`<td ${
  attributeList<TdAttributes>(attributes, classes)
}>${content}</td>`;

  