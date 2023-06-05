import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TemplateAttributes = HTMLGlobalAttributes;

export interface TemplateElementOptions {
  classes?: string[];
  attributes?: TemplateAttributes;
}

export const template = (
  content: string | HTMLTemplate,
  { attributes, classes }: TemplateElementOptions = {},
) =>
  html`<template ${
    attributeList<TemplateAttributes>(attributes, classes)
  }>${content}</template>`;
