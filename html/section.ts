import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SectionAttributes = HTMLGlobalAttributes;

export const section = (
  content: string | HTMLTemplate,
  attributes: SectionAttributes = {},
) =>
  html`<section ${
    attributeList<SectionAttributes>(attributes)
  }>${content}</section>`;
