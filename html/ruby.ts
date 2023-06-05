import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type RubyAttributes = HTMLGlobalAttributes;

export interface RubyElementOptions {
  classes?: string[];
  attributes?: RubyAttributes;
}

export const ruby = (
  content: string | HTMLTemplate,
  { attributes, classes }: RubyElementOptions = {},
) =>html`<ruby ${
  attributeList<RubyAttributes>(attributes, classes)
}>${content}</ruby>`;

  