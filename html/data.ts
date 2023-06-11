import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DataAttributes = { value: string | number } | HTMLGlobalAttributes;

export const data = (
  contentOrOptions: string | HTMLTemplate | DataAttributes,
  optionsOrNothing: DataAttributes = {},
) => {
  const content = isTypeOfDataElementOptions(contentOrOptions)
    ? undefined
    : contentOrOptions;

  const options = isTypeOfDataElementOptions(contentOrOptions)
    ? contentOrOptions
    : optionsOrNothing;

  const attributes = options;

  return content
    ? html`<data ${attributeList<DataAttributes>(attributes)}>${content}</data>`
    : html`<data ${attributeList<DataAttributes>(attributes)}>`;
};

function isTypeOfDataElementOptions(
  contentOrOptions: string | HTMLTemplate | DataAttributes,
): contentOrOptions is DataAttributes {
  return typeof contentOrOptions === "object" &&
    (contentOrOptions as DataAttributes) !== undefined;
}
