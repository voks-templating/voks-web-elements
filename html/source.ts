import { html, HTMLTemplate } from "../deps.ts";
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

export interface SourceElementOptions {
  classes?: string[];
  attributes?: SourceAttributes;
}

export const source = (
  content: string | HTMLTemplate,
  { attributes, classes }: SourceElementOptions = {},
) =>
  html`<source ${
    attributeList<SourceAttributes>(attributes, classes)
  }>${content}</source>`;
