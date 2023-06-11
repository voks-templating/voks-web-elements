import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DfnAttributes = HTMLGlobalAttributes;

export const dfn = (
  content: string | HTMLTemplate,
  attributes: DfnAttributes = {},
) => html`<dfn ${attributeList<DfnAttributes>(attributes)}>${content}</dfn>`;
