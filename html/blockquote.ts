import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BlockquoteAttributes = { cite?: string } | HTMLGlobalAttributes;

export const blockquote = (
  content: string | HTMLTemplate,
  attributes: BlockquoteAttributes = {},
) =>
  html`<blockquote ${
    attributeList<BlockquoteAttributes>(attributes)
  }>${content}</blockquote>`;
