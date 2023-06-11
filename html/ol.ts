import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type OlAttributes = {
  reversed?: boolean;
  start?: number;
  type?: string;
} | HTMLGlobalAttributes;

export const ol = (
  content: string | HTMLTemplate,
  attributes: OlAttributes = {},
) => html`<ol ${attributeList<OlAttributes>(attributes)}>${content}</ol>`;
