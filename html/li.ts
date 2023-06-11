import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type LiAttributes = {
  value?: number;
} | HTMLGlobalAttributes;

export const li = (
  content: string | HTMLTemplate,
  attributes: LiAttributes = {},
) => html`<li ${attributeList<LiAttributes>(attributes)}>${content}</li>`;
