import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AnchorAttributes =
  | {
    download?: boolean | string;
    href?: string;
    hreflang?: string;
    ping?: string;
    refererPolicy?: string;
    rel?: string;
    target?: string;
    type: string;
  }
  | HTMLGlobalAttributes;

export interface AnchorElementOptions {
  classes?: string[];
  attributes?: AnchorAttributes;
}

export const a = (
  content: string | HTMLTemplate,
  { attributes, classes }: AnchorElementOptions = {},
) =>
  html`<a ${
    attributeList<AnchorAttributes>(attributes, classes)
  }>${content}</a>`;
