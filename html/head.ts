import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HeadAttributes = HTMLGlobalAttributes;

export const head = (
  content: string | HTMLTemplate,
  attributes: HeadAttributes = {},
) => html`<head ${attributeList<HeadAttributes>(attributes)}>${content}</head>`;
