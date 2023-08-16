import { html, HTMLTemplate } from "../deps.ts";
import { attributesAndContentFromArgs } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { WebElementContent } from "./web_element_content.ts";

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
} & HTMLGlobalAttributes;

export function body(
  attributes: BodyAttributes,
  content?: WebElementContent,
): HTMLTemplate;

export function body(
  content?: WebElementContent,
): HTMLTemplate;

export function body(...args: [unknown, unknown?]) {
  const { content, attributes } = attributesAndContentFromArgs<
    BodyAttributes
  >(...args);
  return html`<body${
    attributeList<BodyAttributes>(attributes)
  }>${content}</body>`;
}
