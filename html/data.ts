import { html, HTMLTemplate } from "../deps.ts";
import { attributeList } from "./element_helper.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";

export type DataAttributes = { value: string | number } | HTMLGlobalAttributes;

export interface DataElementOptions {
  classes?: string[];
  attributes?: DataAttributes;
}

export const data = (
  contentOrOptions: string | HTMLTemplate | DataElementOptions,
  optionsOrNothing: DataElementOptions = {},
) => {
  const content = isTypeOfDataElementOptions(contentOrOptions)
    ? undefined
    : contentOrOptions;

  const options = isTypeOfDataElementOptions(contentOrOptions)
    ? contentOrOptions
    : optionsOrNothing;

  const { attributes, classes } = options;

  return content
    ? html`<data ${
      attributeList<DataAttributes>(attributes, classes)
    }>${content}</data>`
    : html`<data ${attributeList<DataAttributes>(attributes, classes)}>`;
};

function isTypeOfDataElementOptions(
  contentOrOptions: string | HTMLTemplate | DataElementOptions,
): contentOrOptions is DataElementOptions {
  return typeof contentOrOptions === "object" &&
    (contentOrOptions as DataElementOptions).attributes !== undefined;
}
