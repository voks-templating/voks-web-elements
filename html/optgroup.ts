import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type OptgroupAttributes = {
  disabled?: boolean;
  label?: string;
} | HTMLGlobalAttributes;

export const optgroup = (
  content: string | HTMLTemplate,
  attributes: OptgroupAttributes = {},
) =>
  html`<optgroup ${
    attributeList<OptgroupAttributes>(attributes)
  }>${content}</optgroup>`;
