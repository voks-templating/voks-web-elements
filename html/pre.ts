import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type PreAttributes = HTMLGlobalAttributes;

export const pre = (
  content: string | HTMLTemplate,
  attributes: PreAttributes = {},
) => html`<pre ${attributeList<PreAttributes>(attributes)}>${content}</pre>`;
