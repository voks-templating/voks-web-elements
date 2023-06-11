import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type RtAttributes = HTMLGlobalAttributes;

export const rt = (
  content: string | HTMLTemplate,
  attributes: RtAttributes = {},
) => html`<rt ${attributeList<RtAttributes>(attributes)}>${content}</rt>`;
