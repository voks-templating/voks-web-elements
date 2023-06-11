import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BdiAttributes = HTMLGlobalAttributes;

export const bdi = (
  content: string | HTMLTemplate,
  attributes: BdiAttributes = {},
) => html`<bdi ${attributeList<BdiAttributes>(attributes)}>${content}</bdi>`;
