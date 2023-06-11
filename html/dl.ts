import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DlAttributes = HTMLGlobalAttributes;

export const dl = (
  content: string | HTMLTemplate,
  attributes: DlAttributes = {},
) => html`<dl ${attributeList<DlAttributes>(attributes)}>${content}</dl>`;
