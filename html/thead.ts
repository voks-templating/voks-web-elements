import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TheadAttributes = HTMLGlobalAttributes;

export const thead = (
  content: string | HTMLTemplate,
  attributes: TheadAttributes = {},
) =>
  html`<thead ${attributeList<TheadAttributes>(attributes)}>${content}</thead>`;
