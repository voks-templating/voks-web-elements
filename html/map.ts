import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MapAttributes = {
  name?: string;
} | HTMLGlobalAttributes;

export const map = (
  content: string | HTMLTemplate,
  attributes: MapAttributes = {},
) => html`<map ${attributeList<MapAttributes>(attributes)}>${content}</map>`;
