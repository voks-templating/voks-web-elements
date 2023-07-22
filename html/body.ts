import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type BodyAttributes = {
  onafterprint?: string;
  onbeforeunload?: string;
  onblur?: string;
  onerror?: string;
  onfocus?: string;
  onhashchange?: string;
  onlanguagechange?: string;
  onload?: string;
  onmessage?: string;
  onoffline?: string;
  ononline?: string;
  onpopstate?: string;
  onredo?: string;
  onresize?: string;
  onstorage?: string;
  onundo?: string;
  onunload?: string;
} | HTMLGlobalAttributes;

export function body(
  attributes: BodyAttributes,
  content?:
    | string
    | HTMLTemplate
    | (string | HTMLTemplate | HTMLTemplateGenerator)[],
): HTMLTemplateGenerator;

export function body(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function body(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    BodyAttributes
  >(...args);
  return html`<body ${
    attributeList<BodyAttributes>(attributes)
  }>${content}</body>`;
}
