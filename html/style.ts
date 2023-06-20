import { html, HTMLTemplate, minify } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type StyleAttributes = {
  media?: string;
  nonce?: string;
  title?: string;
} | HTMLGlobalAttributes;

export const style = (
  content: string | HTMLTemplate,
  attributes: StyleAttributes = {},
) =>
  html`<style ${attributeList<StyleAttributes>(attributes)}>${content}</style>`;
