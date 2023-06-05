import { html } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type IAttributes = HTMLGlobalAttributes;

export interface IElementOptions {
  classes?: string[];
  attributes?: IAttributes;
}

export const i = (
  { attributes, classes }: IElementOptions = {},
) => html`<i ${attributeList<IAttributes>(attributes, classes)} \\>`;
