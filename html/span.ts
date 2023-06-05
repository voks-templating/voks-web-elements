import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SpanAttributes = HTMLGlobalAttributes;

export interface SpanElementOptions {
  classes?: string[];
  attributes?: SpanAttributes;
}

export const span = (
  content: string | HTMLTemplate,
  { attributes, classes }: SpanElementOptions = {},
) =>html`<span ${
  attributeList<SpanAttributes>(attributes, classes)
}>${content}</span>`;

  