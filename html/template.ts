import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TemplateAttributes = HTMLGlobalAttributes;

export function template(
  attributes: TemplateAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function template(
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function template(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    TemplateAttributes
  >(...args);
  return html`<template ${
    attributeList<TemplateAttributes>(attributes)
  }>${content}</template>`;
}
