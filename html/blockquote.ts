import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BlockquoteAttributes = { cite?: string } | HTMLGlobalAttributes;

export interface BlockquoteElementOptions {
  classes?: string[];
  attributes?: BlockquoteAttributes;
}

export const blockquote = (
  content: string | HTMLTemplate,
  { attributes, classes }: BlockquoteElementOptions = {},
) =>
  html`<blockquote ${
    attributeList<BlockquoteAttributes>(attributes, classes)
  }>${content}</blockquote>`;
