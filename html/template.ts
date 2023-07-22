import { html, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

export type TemplateAttributes = HTMLGlobalAttributes;

export function template(
  attributes: TemplateAttributes,
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function template(
  content?: WebElementContent,
): HTMLTemplateGenerator;

export function template(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TemplateAttributes
  >(...args);
  return html`<template ${
    attributeList<TemplateAttributes>(attributes)
  }>${content}</template>`;
}
