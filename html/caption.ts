import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CaptionAttributes = HTMLGlobalAttributes;

export const caption = (
  content: string | HTMLTemplate,
  attributes: CaptionAttributes = {},
) =>
  html`<caption ${
    attributeList<CaptionAttributes>(attributes)
  }>${content}</caption>`;
