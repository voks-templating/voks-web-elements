import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AreaAttributes = {
  alt?: string;
  coords?: string;
  download?: string | boolean;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  shape?: string;
  target?: string;
} & HTMLGlobalAttributes;

export const area = (
  attributes: AreaAttributes = {},
) => html`<area${attributeList<AreaAttributes>(attributes)}>`;
