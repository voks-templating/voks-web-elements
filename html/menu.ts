import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type MenuAttributes = HTMLGlobalAttributes;

export function menu(
  attributes: MenuAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function menu(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function menu(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    MenuAttributes
  >(...args);
  return html`<menu${
    attributeList<MenuAttributes>(attributes)
  }>${content}</menu>`;
}
