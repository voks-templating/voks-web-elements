import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type MenuAttributes = HTMLGlobalAttributes;

export function menu(
  attributes: MenuAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function menu(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function menu(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    MenuAttributes
  >(...args);
  return html`<menu ${
    attributeList<MenuAttributes>(attributes)
  }>${content}</menu>`;
}
