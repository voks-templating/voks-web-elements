import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type LinkAttributes = {
  href?: string;
  hreflang?: string;
  media?: string;
  rel?: string;
  sizes?: string;
  type?: string;
  crossorigin?: string;
  integrity?: string;
  referrerpolicy?: string;
  as?: string;
  disabled?: boolean;
  imagesizes?: string;
  imagesrcset?: string;
  imagesrc?: string;
} & HTMLGlobalAttributes;

export const link = (
  attributes: LinkAttributes = {},
) => html`<link${attributeList<LinkAttributes>(attributes)} />`;
