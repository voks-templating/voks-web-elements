import { html, HTMLTemplate, HTMLTemplateGenerator } from "../deps.ts";
import { isObjectLiteral } from "../lib/util.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type AnchorAttributes =
  | {
    download?: boolean | string;
    href?: string;
    hreflang?: string;
    ping?: string;
    refererPolicy?: string;
    rel?: string;
    target?: string;
    type: string;
  }
  | HTMLGlobalAttributes;

export function a(
  attributes: AnchorAttributes,
  content?: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function a(
  content: string | HTMLTemplate,
): HTMLTemplateGenerator;

export function a(
  attributesOrContent: unknown = {},
  contentOrNothing: string | HTMLTemplate = "",
) {
  let attributes, content;

  if (!isObjectLiteral(attributesOrContent)) {
    attributes = {};
    content = attributesOrContent as string | HTMLTemplate;
  } else if (isObjectLiteral(attributesOrContent)) {
    attributes = attributesOrContent as AnchorAttributes;
    content = contentOrNothing as string | HTMLTemplate;
  }

  return html`<a ${attributeList<AnchorAttributes>(attributes)}>${content}</a>`;
}
