import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SpanAttributes = HTMLGlobalAttributes;

export const span = (
  content: string | HTMLTemplate,
  attributes: SpanAttributes = {},
) => html`<span ${attributeList<SpanAttributes>(attributes)}>${content}</span>`;
