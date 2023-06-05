import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type UlAttributes = HTMLGlobalAttributes;

export interface UlElementOptions {
  classes?: string[];
  attributes?: UlAttributes;
}

export const ul = (
  content: string | HTMLTemplate,
  { attributes, classes }: UlElementOptions = {},
) =>html`<ul ${
  attributeList<UlAttributes>(attributes, classes)
}>${content}</ul>`;

  