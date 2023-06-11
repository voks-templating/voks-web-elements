import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TbodyAttributes = HTMLGlobalAttributes;

export const tbody = (
  content: string | HTMLTemplate,
  attributes: TbodyAttributes = {},
) =>
  html`<tbody ${attributeList<TbodyAttributes>(attributes)}>${content}</tbody>`;
