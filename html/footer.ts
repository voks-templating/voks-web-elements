import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type FooterAttributes = HTMLGlobalAttributes;

export const footer = (
  content: string | HTMLTemplate,
  attributes: FooterAttributes = {},
) =>
  html`<footer ${
    attributeList<FooterAttributes>(attributes)
  }>${content}</footer>`;
