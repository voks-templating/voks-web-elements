import { attr, type AttributeValue, html } from "../deps.ts";
import { HTMLGlobalAttributes } from "./global_attributes.ts";
import { InputAttributes } from "./input_attributes.ts";

export interface InputFieldOptions<T> {
  classes?: string[];
  attributes?: InputAttributes<T>;
}

export const input = <T>(
  { attributes, classes }: InputFieldOptions<T> = {},
) => html`<input ${attributeList<T>(attributes, classes)} />`;

export const buttonInput = (
  { attributes = {} }: InputFieldOptions<"button"> = {},
) => input({ attributes: { ...attributes, type: "button" } });

export const checkboxInput = (
  { attributes = {} }: InputFieldOptions<"checkbox"> = {},
) => input({ attributes: { ...attributes, type: "checkbox" } });

export const colorInput = (
  { attributes = {} }: InputFieldOptions<"color"> = {},
) => input({ attributes: { ...attributes, type: "color" } });

export const dateInput = (
  { attributes = {} }: InputFieldOptions<"date"> = {},
) => input({ attributes: { ...attributes, type: "date" } });

export const datetimeLocalInput = (
  { attributes = {} }: InputFieldOptions<"datetime-local"> = {},
) => input({ attributes: { ...attributes, type: "datetime-local" } });

export const emailInput = (
  { attributes = {} }: InputFieldOptions<"email"> = {},
) => input({ attributes: { ...attributes, type: "email" } });

export const fileInput = (
  { attributes = {} }: InputFieldOptions<"file"> = {},
) => input({ attributes: { ...attributes, type: "file" } });

export const hiddenInput = (
  { attributes = {} }: InputFieldOptions<"hidden"> = {},
) => input({ attributes: { ...attributes, type: "hidden" } });

export const imageInput = (
  { attributes = {} }: InputFieldOptions<"image"> = {},
) => input({ attributes: { ...attributes, type: "image" } });

export const monthInput = (
  { attributes = {} }: InputFieldOptions<"month"> = {},
) => input({ attributes: { ...attributes, type: "month" } });

export const numberInput = (
  { attributes = {} }: InputFieldOptions<"number"> = {},
) => input({ attributes: { ...attributes, type: "number" } });

export const passwordInput = (
  { attributes = {} }: InputFieldOptions<"password"> = {},
) => input({ attributes: { ...attributes, type: "password" } });

export const radioInput = (
  { attributes = {} }: InputFieldOptions<"radio"> = {},
) => input({ attributes: { ...attributes, type: "radio" } });

export const rangeInput = (
  { attributes = {} }: InputFieldOptions<"range"> = {},
) => input({ attributes: { ...attributes, type: "range" } });

export const resetInput = (
  { attributes = {} }: InputFieldOptions<"reset"> = {},
) => input({ attributes: { ...attributes, type: "reset" } });

export const searchInput = (
  { attributes = {} }: InputFieldOptions<"search"> = {},
) => input({ attributes: { ...attributes, type: "search" } });

export const submitInput = (
  { attributes = {} }: InputFieldOptions<"submit"> = {},
) => input({ attributes: { ...attributes, type: "submit" } });

export const telInput = (
  { attributes = {} }: InputFieldOptions<"tel"> = {},
) => input({ attributes: { ...attributes, type: "tel" } });

export const textInput = (
  { attributes = {} }: InputFieldOptions<"text"> = {},
) => input({ attributes: { ...attributes, type: "text" } });

export const timeInput = (
  { attributes = {} }: InputFieldOptions<"time"> = {},
) => input({ attributes: { ...attributes, type: "time" } });

export const urlInput = (
  { attributes = {} }: InputFieldOptions<"url"> = {},
) => input({ attributes: { ...attributes, type: "url" } });

export const weekInput = (
  { attributes = {} }: InputFieldOptions<"week"> = {},
) => input({ attributes: { ...attributes, type: "week" } });

function attributeList<T>(
  attributes?: InputAttributes<T>,
  classes?: (string | undefined)[],
) {
  if (!attributes) return "";

  if (classes && classes.length > 0) {
    (attributes as HTMLGlobalAttributes).class = classes.concat([
      (attributes as HTMLGlobalAttributes).class,
    ])
      .filter((c) => c !== undefined)
      .join(" ");
  }

  return Object.entries(attributes)
    .sort(([a], [b]) => {
      if (a === "type") return -1;
      else if (b === "type") return 1;
      return a.localeCompare(b);
    }) // always start with type attribute!
    .map(([attribute, value]) => attr(attribute, value as AttributeValue));
}
