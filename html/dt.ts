import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DtAttributes = HTMLGlobalAttributes;

export const dt = (
  content: string | HTMLTemplate,
  attributes: DtAttributes = {},
) => html`<dt ${attributeList<DtAttributes>(attributes)}>${content}</dt>`;
