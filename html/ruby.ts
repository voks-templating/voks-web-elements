import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type RubyAttributes = HTMLGlobalAttributes;

export const ruby = (
  content: string | HTMLTemplate,
  attributes: RubyAttributes = {},
) => html`<ruby ${attributeList<RubyAttributes>(attributes)}>${content}</ruby>`;
