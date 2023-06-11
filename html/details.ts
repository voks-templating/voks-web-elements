import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DetailsAttributes = {
  open?: boolean;
} | HTMLGlobalAttributes;

export const details = (
  content: string | HTMLTemplate,
  attributes: DetailsAttributes = {},
) =>
  html`<details ${
    attributeList<DetailsAttributes>(attributes)
  }>${content}</details>`;
