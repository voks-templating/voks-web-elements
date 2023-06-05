import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type ScriptAttributes = HTMLGlobalAttributes;

export interface ScriptElementOptions {
  classes?: string[];
  attributes?: ScriptAttributes;
}

export const script = (
  content: string | HTMLTemplate,
  { attributes, classes }: ScriptElementOptions = {},
) =>
  html`<script ${
    attributeList<ScriptAttributes>(attributes, classes)
  }>${content}</script>`;
