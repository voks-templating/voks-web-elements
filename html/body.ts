import { html, HTMLTemplate } from "../deps.ts";
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

export interface BodyElementOptions {
  classes?: string[];
  attributes?: BodyAttributes;
}

export const body = (
  content: string | HTMLTemplate,
  { attributes, classes }: BodyElementOptions = {},
) =>
  html`<body ${
    attributeList<BodyAttributes>(attributes, classes)
  }>${content}</body>`;
