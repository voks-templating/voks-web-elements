import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HeaderAttributes = HTMLGlobalAttributes;

export interface HeaderElementOptions {
  classes?: string[];
  attributes?: HeaderAttributes;
}

export const header = (
  content: string | HTMLTemplate,
  { attributes, classes }: HeaderElementOptions = {},
) =>html`<header ${
  attributeList<HeaderAttributes>(attributes, classes)
}>${content}</header>`;

  