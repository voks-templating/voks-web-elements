import { html, HTMLTemplate, minify } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type TemplateAttributes = HTMLGlobalAttributes;

export const template = (
  content: string | HTMLTemplate,
  attributes: TemplateAttributes = {},
) =>
  html`<template ${
    attributeList<TemplateAttributes>(attributes)
  }>${content}</template>`;
