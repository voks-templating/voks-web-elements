import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type StrongAttributes = HTMLGlobalAttributes;

export const strong = (
  content: string | HTMLTemplate,
  attributes: StrongAttributes = {},
) =>
  html`<strong ${
    attributeList<StrongAttributes>(attributes)
  }>${content}</strong>`;
