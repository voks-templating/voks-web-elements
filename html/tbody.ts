import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TbodyAttributes = HTMLGlobalAttributes;

export interface TbodyElementOptions {
  classes?: string[];
  attributes?: TbodyAttributes;
}

export const tbody = (
  content: string | HTMLTemplate,
  { attributes, classes }: TbodyElementOptions = {},
) =>html`<tbody ${
  attributeList<TbodyAttributes>(attributes, classes)
}>${content}</tbody>`;

  