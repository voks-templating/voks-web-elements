import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type OlAttributes = HTMLGlobalAttributes;

export interface OlElementOptions {
  classes?: string[];
  attributes?: OlAttributes;
}

export const ol = (
  content: string | HTMLTemplate,
  { attributes, classes }: OlElementOptions = {},
) =>html`<ol ${
  attributeList<OlAttributes>(attributes, classes)
}>${content}</ol>`;

  