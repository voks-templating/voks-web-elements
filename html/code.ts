import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type CodeAttributes = HTMLGlobalAttributes;

export const code = (
  content: string | HTMLTemplate,
  attributes: CodeAttributes = {},
) => html`<code ${attributeList<CodeAttributes>(attributes)}>${content}</code>`;
