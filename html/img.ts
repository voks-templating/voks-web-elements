import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ImgAttributes = {
  alt?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  crossorigin?: string;
  usemap?: string;
  ismap?: boolean;
  width?: number;
  height?: number;
  referrerpolicy?: string;
  decoding?: string;
  loading?: string;
  elementtiming?: string;
  fetchpriority?: string;
} | HTMLGlobalAttributes;

export interface ImgElementOptions {
  classes?: string[];
  attributes?: ImgAttributes;
}

export const img = (
  { attributes, classes }: ImgElementOptions = {},
) => html`<img ${attributeList<ImgAttributes>(attributes, classes)} \\>`;
