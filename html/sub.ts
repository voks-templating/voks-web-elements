import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SubAttributes = HTMLGlobalAttributes;

export const sub = (
  content: string | HTMLTemplate,
  attributes: SubAttributes = {},
) => html`<sub ${attributeList<SubAttributes>(attributes)}>${content}</sub>`;
