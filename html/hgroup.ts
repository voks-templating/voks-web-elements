import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HgroupAttributes = HTMLGlobalAttributes;

export const hgroup = (
  content: string | HTMLTemplate,
  attributes: HgroupAttributes = {},
) =>
  html`<hgroup ${
    attributeList<HgroupAttributes>(attributes)
  }>${content}</hgroup>`;
