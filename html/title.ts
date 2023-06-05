import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TitleAttributes = HTMLGlobalAttributes;

export interface TitleElementOptions {
  classes?: string[];
  attributes?: TitleAttributes;
}

export const title = (
  content: string | HTMLTemplate,
  { attributes, classes }: TitleElementOptions = {},
) =>html`<title ${
  attributeList<TitleAttributes>(attributes, classes)
}>${content}</title>`;

  