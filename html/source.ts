import { html, HTMLTemplate, minify } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type SourceAttributes = {
  type?: string;
  srcset?: string;
  sizes?: string;
  media?: string;
  src?: string;
  height?: number;
  width?: number;
} | HTMLGlobalAttributes;

export const source = (
  content: string | HTMLTemplate,
  attributes: SourceAttributes = {},
) =>
  html`<source ${
    attributeList<SourceAttributes>(attributes)
  }>${content}</source>`;
