import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MetaAttributes = {
  charset?: string;
  content?: string;
  httpEquiv?: string;
  name?: string;
} | HTMLGlobalAttributes;

export const meta = (
  attributes: MetaAttributes = {},
) => html`<meta ${attributeList<MetaAttributes>(attributes)} />`;
