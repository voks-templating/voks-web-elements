import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type UlAttributes = HTMLGlobalAttributes;

export const ul = (
  content: string | HTMLTemplate,
  attributes: UlAttributes = {},
) => html`<ul ${attributeList<UlAttributes>(attributes)}>${content}</ul>`;
