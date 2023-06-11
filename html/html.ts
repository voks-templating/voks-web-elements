import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type HtmlAttributes = {
  xmlns?: string;
} | HTMLGlobalAttributes;

export const htmlElement = (
  content: string | HTMLTemplate,
  attributes: HtmlAttributes = {},
) => html`<html ${attributeList<HtmlAttributes>(attributes)}>${content}</html>`;
