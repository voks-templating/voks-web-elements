import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type ScriptAttributes = {
  async?: boolean;
  defer?: boolean;
  src?: string;
  type?: string;
  crossorigin?: string;
  integrity?: string;
  nomodule?: boolean;
  nonce?: string;
  referrerpolicy?: string;
} & HTMLGlobalAttributes;

export function script(
  attributes: ScriptAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function script(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function script(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    ScriptAttributes
  >(...args);
  return html`<script${
    attributeList<ScriptAttributes>(attributes)
  }>${content}</script>`;
}
