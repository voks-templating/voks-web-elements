import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DlAttributes = HTMLGlobalAttributes;

export interface DlElementOptions {
  classes?: string[];
  attributes?: DlAttributes;
}

export const dl = (
  content: string | HTMLTemplate,
  { attributes, classes }: DlElementOptions = {},
) =>
  html`<dl ${attributeList<DlAttributes>(attributes, classes)}>${content}</dl>`;
