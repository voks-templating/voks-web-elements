import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type EmbedAttributes = {
  height?: number;
  width?: number;
  src?: string;
  type?: string;
} | HTMLGlobalAttributes;

export const embed = (
  content: string | HTMLTemplate,
  attributes: EmbedAttributes = {},
) =>
  html`<embed ${attributeList<EmbedAttributes>(attributes)}>${content}</embed>`;
