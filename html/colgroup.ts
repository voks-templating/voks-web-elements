import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ColgroupAttributes = { span?: number } | HTMLGlobalAttributes;

export const colgroup = (
  content: string | HTMLTemplate,
  attributes: ColgroupAttributes = {},
) =>
  html`<colgroup ${
    attributeList<ColgroupAttributes>(attributes)
  }>${content}</colgroup>`;
