import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HeaderAttributes = HTMLGlobalAttributes;

export const header = (
  content: string | HTMLTemplate,
  attributes: HeaderAttributes = {},
) =>
  html`<header ${
    attributeList<HeaderAttributes>(attributes)
  }>${content}</header>`;
